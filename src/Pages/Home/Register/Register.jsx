import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="my-container">
        <div className="flex justify-center align-center">
          <div className=" ">
            <h1 className="text-center text-purple-400 text-4xl font-bold mb-3">
              Plese Login
            </h1>
            <div className="bg-slate-200 px-11 py-16 rounded-md">
              <form action="">
                <label className="mt-32" htmlFor="">
                  Enter You Name
                </label>
                <br />
                <input
                  className="email w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                  type="email"
                  placeholder="enter your email"
                  required
                />
                <br />
                <label className="font-5xl" htmlFor="">
                  Enter You Password
                </label>
                <br />
                <input
                  className="email md:w-96 p-3 rounded-md my-2 mb-4"
                  type="password"
                  placeholder="enter your password"
                  required
                />
                <br />
                <p className="mb-3 text-red-600 font-semibold"> errot</p>
                <button className="btn">Login</button>
                <p className="p-2">
                  <small className="text-info">
                    All ready have an account?
                    <Link className="underline  " to="/login">
                      Plese login
                    </Link>
                  </small>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
