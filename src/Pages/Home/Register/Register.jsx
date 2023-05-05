import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
  const { registerUser, upDateUser, setReload } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handelSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.text.value;
    const email = form.email.value;
    const image = form.file.value;
    const password = form.password.value;

    setSuccess("");
    setError("");

    if (!email || !password || !name || !image) {
      setError("Must be fillup all Criteria ");
      toast.error("Must be fillup all Criteria ", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("At least two capital letters");
      toast.error("At least two capital letters", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("At least two numeric digits");
      toast.error("At least two numeric digits", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    } else if (password.length < 6) {
      setError("At least more then 6 numbers ");
      toast.error("At least more then 6 numbers ", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          const registerUser = result.user;
          upDateUser(registerUser, name, image)
            .then((result) => {
              setReload(new Date().getTime());
            })
            .catch((error) => {
              setError(error.message);
              toast.error(`${err.message}`, {
                position: toast.POSITION.TOP_CENTER,
              });
            });

          setSuccess("Account create Success");
          toast.success(" Account Create Success", {
            position: toast.POSITION.TOP_CENTER,
          });
          navigate("/");
          console.log(result.user);
        })
        .catch((err) => {
          setError(err.message);
          toast.error(`${err.message}`, {
            position: toast.POSITION.TOP_CENTER,
          });
        });
    }
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
                  />
                </div>
                <div>
                  <label htmlFor="">Choose profile photo URL</label> <br />
                  <input
                    className="w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                    type="text"
                    name="file"
                    placeholder="Enter your photo URL"
                  />
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
                  />
                </div>
                <p className=" text-red-600 font-semibold"> {error}</p>
                <p className="mb-3 text-emerald-600 font-semibold">{success}</p>
                <button className="btn2 w-full">Register</button>
                <p className="p-2 mt-3 text-black font-semibold">
                  You hava an account ?
                  <Link className=" mr-1 btn btn-link" to="/login">
                    Plese Login
                  </Link>
                </p>
              </form>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
