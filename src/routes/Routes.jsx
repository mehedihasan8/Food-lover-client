import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import Chefs from "../Pages/Home/chefs/Chefs";
import ShowChef from "../LayOut/ShowChef";
import ShowChefDetails from "../Pages/ShowChefDetails/ShowChefDetails/ShowChefDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/"),
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/showchef",
    element: <ShowChef></ShowChef>,
    children: [
      {
        path: ":id",
        element: <ShowChefDetails></ShowChefDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`),
      },
    ],
  },
]);

export default routes;
