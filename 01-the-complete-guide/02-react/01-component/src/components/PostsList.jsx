import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import Modal from "./Modal.jsx";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

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
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
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
