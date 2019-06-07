## GraphQL Google OAuth Workshop

### Introduction

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

**Goal**: The purpose of this app is to practice using graphQL and Google OAuth to successfully authenticate in an app.

**Learning Objectives**:

1. understand basic OAuth pattern
2. understand how to use graphQL to obtain a token from your server

### Setup

If you have not already, please install:

- [Yarn](https://yarnpkg.com/en/docs/install)

1. Run `yarn install` in both `/client` and `/server`.
2. To start the client, navigate to `client` and run `yarn start`. Visit [locahost:3000](http://localhost:3000/) to see
   your appplication.
3. To start the server, start mongoDB with `mongod` in a separate tab. Then, navigate to `server` and run `node src/app.js`.

![Auth Code Flow](./AuthCodeFlow.png)

### Guide

1. Prompt authentication provider login.

2. Store access token on the client.

3. Send access token to your server as part of a graphQL mutation.

4. Verify the token recieved by your server and request user infromation from provider.

5. Save the user’s data from the provider's response to your database.

6. Create and return a JWT to the client for protected requests

**Not Covered**

7. Client saves JWT and uses token for all authenticated requests

8. Server uses JWT to allow or deny request and identify current user

### Helpful Links

- OAuth overview - https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
- Create a project - https://console.developers.google.com/
- GraphQL auth strategies - https://blog.apollographql.com/authorization-in-graphql-452b1c402a9
- Brew install mongodb - https://treehouse.github.io/installation-guides/mac/mongo-mac.html
- Mongoose overview - https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/
- Passport docs - http://www.passportjs.org/docs/authenticate/

### References

- https://www.freecodecamp.org/news/how-to-nail-social-authentication-in-graphql-27943aee5dce/
- https://www.digitalocean.com/community/tutorials/an-introduction-to-oauth-2
