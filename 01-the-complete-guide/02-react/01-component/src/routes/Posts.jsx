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

export async function loader() {
  const response = await fetch("http://localhost:8080/posts");
  const data = await response.json();
  return data.posts;
}
