import React from "react";
import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";
import errorPage from "../../../../public/image/error.jpeg";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error.message);
  return (
    <div className="error-page-bg">
      <div className="w-5/6 ">
        <div className="">
          <img
            className="h-56 lg:h-80 lg:w-80 w-56 rounded-full mx-auto"
            src={errorPage}
            alt=""
          />
          <h1 className="text-7xl text-red-600 font-bold text-center">
            Page Not Found !
          </h1>
          <h2 className="text-2xl text-red-800 font-bold text-center mt-4">
            {error?.message}
          </h2>
          <Link to="/">
            <span className="flex justify-center mt-6">
              <button className="btn flex justify-center btn-primary">
                Back to Home
              </button>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
