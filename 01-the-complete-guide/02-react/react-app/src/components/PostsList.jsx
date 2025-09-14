import { useLoaderData } from "react-router";

import Post from "./Post.jsx";
import classes from "./PostsList.module.css";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              body={post.body}
            />
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
