import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Sherid/Header/Header";
import Footer from "../Pages/Sherid/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
