import Post from "./Post.jsx";
import classes from "./PostsList.module.css";

function PostsList() {
  return (
    <ul className={classes.posts}>
      <Post author="Max" body="React.js is awesome!" />
      <Post author="John" body="John.js is awesome!" />
    </ul>
  );
}

export default PostsList;
