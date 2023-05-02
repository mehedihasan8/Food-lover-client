import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Register = () => {
  const { registerUser, upDateProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  // const [user, setUser] = useState("");

  const handelSignIn = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.text.value;
    const email = form.email.value;
    const image = form.file.value;
    const password = form.password.value;
    console.log(image);

    setSuccess("");
    setError("");

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("at least two capital letters");
      return;
    } else if (!/(?=.*[0-9].*[0-9])/.test(password)) {
      setError("at least two numeric digits");
      return;
    } else if (password.length < 6) {
      setError("at least more then 6 numbers ");
      return;
    }

    if ((name, email, password)) {
      registerUser(email, password)
        .then((result) => {
          const registerUser = result.user;
          upDateProfile(registerUser, name, image);

          setSuccess("Account create Success");
          console.log(result.user);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    // upDateProfile(user, name, image)
    //   .then((result) => {
    //     const updateUser = result.user;
    //     console.log(updateUser);
    //   })
    //   .catch((errer) => {
    //     setError(errer.message);
    //   });
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
                  <label htmlFor="">Choose profile photo</label> <br />
                  <input
                    className="w-auto md:w-96 p-3 rounded-md mt-2 mb-6"
                    type="text"
                    name="file"
                    placeholder="Enter your photo"
                    required
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
