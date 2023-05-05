import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

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

    if (!email || !password) {
      setError("Provide Email or Password ");
      toast.error("Provide Email or Password ", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          toast.success("Login Successfull !", {
            position: toast.POSITION.TOP_CENTER,
          });
          setSuccess("Login Successfull !");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          setError(error.message);
          toast.error(`${error.message}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
  };

  const loginWithGoogle = () => {
    handelGoogleLogin()
      .then((result) => {
        toast.success(" Login Successfull !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setSuccess(" Login Successfull ! ");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const loginWithGitHub = () => {
    handelGitHubLogin()
      .then((result) => {
        toast.success(" Login Successfull !", {
          position: toast.POSITION.TOP_CENTER,
        });
        setSuccess("Login Successfull ");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        toast.error(`${error.message}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div>
      <div className="my-container">
        <div className="flex justify-center align-center">
          <div className=" ">
            <h1 className="text-center text-purple-400 text-4xl font-bold mb-6">
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
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="">Enter You Password </label>
                  <br />
                  <input
                    className="email md:w-96 p-3 rounded-md my-2 mb-4"
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                  />
                </div>
                <p className=" text-red-600 font-semibold"> {error}</p>
                <p className="mb-3 text-emerald-600 font-semibold">{success}</p>
                <button className="btn2">Login</button>
                <p className="p-2">
                  <small className="text-black font-semibold">
                    Are you new?
                    <Link className=" mr-1 btn btn-link" to="/register">
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
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
