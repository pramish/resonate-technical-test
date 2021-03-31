exports.TwitterUserAPI = "https://api.twitter.com/2/users/by/username/";
exports.TwitterUserQueryFields =
  "?expansions=pinned_tweet_id&user.fields=created_at&tweet.fields=created_at";

exports.TwitterUserTweetAPI =
  "https://api.twitter.com/2/tweets/search/recent?query=from:";
exports.TwitterTweetQueryFields =
  "&tweet.fields=created_at,public_metrics,author_id";
