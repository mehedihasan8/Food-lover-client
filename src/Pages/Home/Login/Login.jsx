import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Login = () => {
  const { loginUser, handelGoogleLogin, handelGitHubLogin } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelLoginUser = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setSuccess("");
    setError("");
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          navigate(from, { replace: true });
          setSuccess("login Success ");
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const loginWithGoogle = () => {
    handelGoogleLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        setSuccess("login Success ");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const loginWithGitHub = () => {
    handelGitHubLogin()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
        setSuccess("login Success ");
      })
      .catch((error) => {
        setError(error.message);
      });
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
                <p className=" text-red-600 font-semibold"> {error}</p>
                <p className="mb-3 text-emerald-600 font-semibold">{success}</p>
                <button className="btn2">Login</button>
                <p className="p-2">
                  <small className="text-black font-semibold">
                    Are you new?
                    <Link className="underline  " to="/register">
                      Plese Register
                    </Link>
                  </small>
                </p>
              </form>
              <div className="my-8">
                <button
                  onClick={loginWithGoogle}
                  className="btn btn-primary btn-outline w-full flex justify-center items-center"
                >
                  <FaGoogle style={{ fontSize: "25px" }} className="mx-4" />{" "}
                  Login with google
                </button>

                <br />
                <button
                  onClick={loginWithGitHub}
                  className="btn btn-primary btn-outline w-full flex justify-center items-center"
                >
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
