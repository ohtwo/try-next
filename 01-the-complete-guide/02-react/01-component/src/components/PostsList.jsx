import { useLoaderData } from "react-router";

import Post from "./Post.jsx";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(post) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    setPosts((prevPosts) => [post, ...prevPosts]);
  }

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ color: "white", textAlign: "center" }}>
          <h2>No posts yet.</h2>
          <p>Start adding some post!</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
