import React from "react";
import Header from "../Pages/Sherid/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Sherid/Footer/Footer";

const ShowChef = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ShowChef;
