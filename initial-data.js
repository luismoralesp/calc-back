const crypto = require('crypto');
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async keystone => {

  // Count existing users
  const {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeGraphQL({
    query: `query {
      _allUsersMeta {
        count
      }
    }`,
  });

  console.log("ññññññ", count)
  if (!count) {
    const password = randomString();
    const email = 'admin@example.com';

    const res = await keystone.executeGraphQL({
      query: `mutation initialUser($password: String, $email: String) {
            createUser(data: {name: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      variables: { password, email },
    });
    console.log(res)
    console.log(`

User created:
  email: ${email}
  password: ${password}
Please change these details after initial login.
`);
  }
};

/*

```
mutation logout {
  unauthenticateUser {
    success
  }
}

query me {
  authenticatedUser {
    id
    name
    email
    isAdmin
  }
}

query all {
  allUsers {
    id
    name
    email
    isAdmin
  }
}

mutation Auth {
  authenticateUserWithPassword(
    email: "admin2@admin.co"
    password: "admin123456"
  ) {
    token
    item {
      name
      email
      isAdmin
    }
  }
}

```

// https://github.com/dotansimha/graphql-code-generator*/