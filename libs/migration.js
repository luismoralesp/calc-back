const fs = require('fs');
const Batch = require('batch');
const batch = new Batch;

// https://stackoverflow.com/questions/22636388/import-sql-file-in-node-js-and-execute-against-postgresql
function processSQLFile(client, fileName) {

  // Extract SQL queries from files. Assumes no ';' in the fileNames
  var queries = fs.readFileSync(fileName).toString()
    .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
    .replace(/\s+/g, ' ') // excess white space
    .split(";") // split into all statements
    .map(Function.prototype.call, String.prototype.trim)
    .filter(function (el) { return el.length != 0 }); // remove any empty ones

  // Execute each SQL query sequentially
  queries.forEach(function (query) {
    batch.push(function (done) {
      if (query.indexOf("COPY") === 0) { // COPY - needs special treatment
        var regexp = /COPY\ (.*)\ FROM\ (.*)\ DELIMITERS/gmi;
        var matches = regexp.exec(query);
        var table = matches[1];
        var fileName = matches[2];
        var copyString = "COPY " + table + " FROM STDIN DELIMITERS ',' CSV HEADER";
        var stream = client.copyFrom(copyString);
        stream.on('close', function () {
          done();
        });
        var csvFile = __dirname + '/' + fileName;
        var str = fs.readFileSync(csvFile);
        stream.write(str);
        stream.end();
      } else { // Other queries don't need special treatment
        client.query(query, function (result) {
          done();
        });
      }
    });
  });
}

module.exports = {
  processSQLFile
};