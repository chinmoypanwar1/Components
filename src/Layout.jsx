import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./src/components/Header/header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;