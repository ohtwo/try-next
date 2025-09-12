import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";

function PostsList() {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="Max" body="React.js is awesome!" />
        <Post author="John" body="John.js is awesome!" />
      </ul>
    </>
  );
}

export default PostsList;
