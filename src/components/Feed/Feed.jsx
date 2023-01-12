import React, { useState, useEffect } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import "../../styles/Feed/Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import { db } from "../../firebase/firebase.js";
import FlipMove from "react-flip-move";

const Feed = () => {
  const collectionRef = collection(db, "posts");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collectionRef);
    const unsub = onSnapshot(collectionRef, (querySnapshot) => {
      let postsArr = [];
      querySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArr);
    });

    setTimeout(() => {
      console.log(posts);
      setLoading(false);
    }, 2000);
    return () => {
      unsub();
    };
  }, []);

  return (
    <div className="feed">
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <>
          <h2>Home</h2>
          <TweetBox />
          <FlipMove>
            {posts.map((post) => (
              <Post
                key={post.text}
                displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
              />
            ))}
          </FlipMove>
        </>
      )}
    </div>
  );
};

export default Feed;
