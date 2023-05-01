import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const handelSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.text.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, name, password);
  };
  return (
    <div>
      <div className="my-container">
        <div className="flex justify-center align-center">
          <div className=" ">
            <h1 className="text-center text-purple-400 text-4xl font-bold mb-3">
              Plese Register
            </h1>
            <div className="bg-slate-200 px-11 py-16 rounded-md">
              <form onSubmit={handelSignIn}>
                <div>
                  <label className="mt-32" htmlFor="">
                    Enter You Name
                  </label>
                  <br />
                  <input
                    className=" w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                    type="text"
                    name="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="">Choose profile photo</label>
                  <div class="shrink-0 flex my-3">
                    <img
                      class="h-16 w-16 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                      alt="Current profile photo"
                    />
                    <input
                      type="file"
                      class="block w-full text-sm text-slate-500
                                file:mr-4 file:py-2 file:px-4
                                file:rounded-full file:border-0
                                file:text-sm file:font-semibold
                                file:bg-violet-50 file:text-violet-700
                                hover:file:bg-violet-100   md:w-96 p-3 rounded-md mt-2 mb-6    "
                    />
                  </div>
                </div>
                <div>
                  <label className="mt-32" htmlFor="">
                    Enter You Email
                  </label>
                  <br />
                  <input
                    className="w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="font-5xl" htmlFor="">
                    Enter You Password
                  </label>
                  <br />
                  <input
                    className="email md:w-96 p-3 rounded-md my-2 mb-4"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <p className="mb-3 text-red-600 font-semibold"> errot</p>
                <button className="btn">Register</button>
                <p className="p-2">
                  <small className="text-info">
                    You hava an account?
                    <Link className="underline  " to="/login">
                      Plese Login
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

export default Register;
