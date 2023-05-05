import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Home/Blog/Blog";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Register/Register";
import ShowChef from "../LayOut/ShowChef";
import ShowChefDetails from "../Pages/ShowChefDetails/ShowChefDetails/ShowChefDetails";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/Sherid/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://loves-food-server.vercel.app/"),
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
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":id",
        element: (
          <PrivateRoutes>
            <ShowChefDetails></ShowChefDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://loves-food-server.vercel.app/${params.id}`),
      },
    ],
  },
]);

export default routes;
