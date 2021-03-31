import React, { useEffect, useState } from "react";
import Loading from "../assets/loading.svg";
import { GraphQlClient } from "../graphql/api";
import {
  getUserTweetByUserName,
  getUserByUserName,
} from "../graphql/getUserTweetByUserName";
import "./get-all-tweets.css";

const GetAllTweets = () => {
  const [allTweets, setAllTweets] = useState();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const userName = "resonateAU";
  useEffect(() => {
    const fetchAllTweets = () => {
      GraphQlClient.request(getUserTweetByUserName, { userName }).then(
        (data) => {
          setAllTweets(data.findTwitterUserTweet);
          setLoading(true);
        }
      );

      GraphQlClient.request(getUserByUserName, { userName }).then((data) => {
        setName(data.findTwitterUser.name);
      });
    };
    fetchAllTweets();
    setInterval(() => {
      fetchAllTweets();
    }, 5000);
  }, []);
  return (
    <div>
      {!loading ? (
        <img src={Loading} alt="loading" />
      ) : (
        <div>
          <div className="cardContent">
            <h1>Resonate Tweets</h1>
          </div>

          {allTweets.map((eachTweet) => (
            <div key={eachTweet.id}>
              <article className="tweetCard">
                <div className="tweetCardBody">
                  <div className="cardContent">
                    <div className="headerContent">
                      <div className="headerContentText">
                        <h3>{name}</h3>
                        <p>@{userName}</p>
                      </div>
                    </div>
                    <p>{eachTweet.text}</p>
                    <p className="tweetDate">
                      Created At: {new Date(eachTweet.created_at).getDay()}/
                      {new Date(eachTweet.created_at).getDate()}/
                      {new Date(eachTweet.created_at).getFullYear()}
                    </p>
                  </div>
                </div>
                <div className="btnWrapper">
                  <button>Likes: {eachTweet.public_metrics.like_count}</button>
                  <button>
                    Retweet: {eachTweet.public_metrics.retweet_count}
                  </button>
                  <button>Reply: {eachTweet.public_metrics.quote_count}</button>
                </div>
              </article>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetAllTweets;
