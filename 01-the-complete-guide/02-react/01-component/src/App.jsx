import { useState } from "react";
import PostsList from "./components/PostsList.jsx";
import MainHeader from "./components/MainHeader.jsx";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function showModalHandler() {
    setIsModalVisible(true);
  }

  function hideModalHandler() {
    setIsModalVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList
          isPosting={isModalVisible}
          onStopPosting={hideModalHandler}
        />
      </main>
    </>
  );
}

export default App;
