import { Outlet } from "react-router";

import PostsList from "../components/PostsList.jsx";

function Posts() {
  return (
    <>
      <main>
        <Outlet />
        <PostsList />
      </main>
    </>
  );
}

export default Posts;
