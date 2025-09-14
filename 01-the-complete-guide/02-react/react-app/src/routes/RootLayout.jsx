import { Outlet } from "react-router";

import MainHeader from "../components/MainHeader.jsx";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default RootLayout;
