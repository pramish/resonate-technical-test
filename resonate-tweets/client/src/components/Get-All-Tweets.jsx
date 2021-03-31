import React, { useEffect, useState } from "react";
import { GraphQlClient } from "../graphql/api";
import { getUserTweetByUserName } from "../graphql/getUserTweetByUserName";

const GetAllTweets = () => {
  const [allTweets, setAllTweets] = useState();
  const userName = "resonateAU";
  useEffect(() => {
    GraphQlClient.request(getUserTweetByUserName, { userName }).then((data) => {
      console.log(data);
    });
  }, [allTweets]);
  return <div></div>;
};

export default GetAllTweets;
