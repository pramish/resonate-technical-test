import { gql } from "graphql-request";

export const getUserTweetByUserName = gql`
  query findTwitterUserTweet($userName: String!) {
    findTwitterUserTweet(userName: $userName) {
      id
      created_at
      text
      public_metrics
    }
  }
`;
export const getUserByUserName = gql`
  query findTwitterUser($userName: String!) {
    findTwitterUser(userName: $userName) {
      name
    }
  }
`;
