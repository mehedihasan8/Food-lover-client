import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handelLoginUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div>
      <div className="my-container">
        <div className="flex justify-center align-center">
          <div className=" ">
            <h1 className="text-center text-purple-400 text-4xl font-bold mb-3">
              Plese Login
            </h1>
            <div className="bg-slate-200 px-11 py-16 rounded-md">
              <form onSubmit={handelLoginUser}>
                <div>
                  <label className="mt-32" htmlFor="">
                    Enter You Email
                  </label>
                  <br />
                  <input
                    className="email w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                    type="email"
                    name="email"
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Enter You Password</label>
                  <br />
                  <input
                    className="email md:w-96 p-3 rounded-md my-2 mb-4"
                    type="password"
                    name="password"
                    placeholder="enter your password"
                    required
                  />
                </div>
                <p className="mb-3 text-red-600 font-semibold"> errot</p>
                <button className="btn">Login</button>
                <p className="p-2">
                  <small className="text-info">
                    Are you new?
                    <Link className="underline  " to="/register">
                      Plese Register
                    </Link>
                  </small>
                </p>
              </form>
              <div className="my-8">
                <button className="btn flex justify-center items-center">
                  <FaGoogle style={{ fontSize: "25px" }} className="mx-4" />{" "}
                  Login with google
                </button>

                <br />
                <button className="btn flex justify-center items-center">
                  <FaGithub style={{ fontSize: "25px" }} className="mx-4" />{" "}
                  Login with gitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
