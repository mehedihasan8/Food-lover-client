import React from "react";
import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  console.log(error.message);
  return (
    <div className="error-page-bg">
      <div className="w-full">
        <h1 className="text-8xl text-red-600 font-bold text-center">OPSE !</h1>
        <h2 className="text-2xl text-red-800 font-bold text-center">
          {error?.message}
        </h2>
        <Link to="/">
          <span className="flex justify-center mt-3">
            <button className="btn flex justify-center">Back to Home</button>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
