const { buildSchema } = require("graphql");

module.exports = schema = buildSchema(`

    scalar JSON

    type TwitterUserTweets {
     id: String!
     created_at: String!
     text: String!,
     public_metrics: JSON,
     entities: JSON,
    }

    type TwitterUser {
     name: String!
    }

    type RootQuery {
		findTwitterUserTweet(userName: String!): [TwitterUserTweets]
		findTwitterUser(userName: String!): TwitterUser
	}

    schema {
        query: RootQuery
    }
`);
