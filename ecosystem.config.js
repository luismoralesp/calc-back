module.exports = {
  apps: [{
    name: 'back',
    script: 'npm run dev',
    watch: '.',
    max_memory_restart: '300M',
    env: {
      "PORT": '3050',
    }
  }]
};
