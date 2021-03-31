exports.TwitterUserAPI = "https://api.twitter.com/2/users/by/username/";
exports.TwitterUserQueryFields =
  "?expansions=pinned_tweet_id&user.fields=created_at&tweet.fields=created_at";

exports.TwitterUserTweetAPI = "https://api.twitter.com/labs/2/tweets/";
exports.TwitterTweetQueryFields =
  "?expansions=attachments.media_keys&tweet.fields=created_at,author_id,lang,source,public_metrics,context_annotations,entities";
