import Post from "./Post.jsx";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost.jsx";
import { useState } from "react";
import Modal from "./Modal.jsx";

function PostsList() {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {isModalVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onAuthorChange={authorChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="John" body="John.js is awesome!" />
      </ul>
    </>
  );
}

export default PostsList;
