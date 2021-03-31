const {
  TwitterUserTweetAPI,
  TwitterTweetQueryFields,
  TwitterUserAPI,
  TwitterUserQueryFields,
} = require("../utils/utils");
const fetch = require("node-fetch");

module.exports = RootValue = {
  findTwitterUserTweet: async ({ userName }) => {
    const twitterUserResponse = await fetch(
      `${TwitterUserTweetAPI}${userName}${TwitterTweetQueryFields}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    const twitterUserData = await twitterUserResponse.json();
    return twitterUserData.data;
  },
  findTwitterUser: async ({ userName }) => {
    const twitterUserResponse = await fetch(
      `${TwitterUserAPI}${userName}${TwitterUserQueryFields}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
      }
    );
    const twitterUserData = await twitterUserResponse.json();
    return twitterUserData.data;
  },
};
