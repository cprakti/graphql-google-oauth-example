const mongoose = require('mongoose');
const { authenticateGoogle } = require('./passport');

const User = mongoose.model('User');

module.exports = {
  Query: {
    hello: () => 'world',
  },
  Mutation: {
    authGoogle: async (_, { input: { accessToken } }, { req, res }) => {
      req.body = {
        ...req.body,
        access_token: accessToken,
      };

      try {
        const { data, info } = await authenticateGoogle(req, res);

        if (data) {
          const user = await User.upsertGoogleUser(data);

          if (user) {
            return {
              name: user.name,
              token: user.generateJWT(),
            };
          }
        }

        if (info) {
          console.log(info);
          switch (info.code) {
            case 'ETIMEDOUT':
              return new Error('Failed to reach Google: Try Again');
            default:
              return new Error('something went wrong');
          }
        }
        return Error('server error');
      } catch (error) {
        return error;
      }
    },
  },
};
