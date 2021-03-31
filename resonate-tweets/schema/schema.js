const { buildSchema } = require("graphql");

module.exports = schema = buildSchema(`

    type TwitterUser {
     id: String!
     created_at: String!
     text: String!
    }

    type RootQuery {
		findTwitterUserTweet(userName: String!): [TwitterUser]
	}

    schema {
        query: RootQuery
    }
`);
