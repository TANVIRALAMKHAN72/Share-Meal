import React, { useContext, useState } from "react";
import Lottie from "lottie-react";
import { FcGoogle } from "react-icons/fc";
import loginLottie from "../assets/login.json";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
  const { signInUser, googleSignIn } = useContext(AuthContext);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";


  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    signInUser(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successful!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.error("Login error:", error.message);
        setError("Invalid email or password.");
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Login failed. Please try again.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: user.uid,
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          }),
        })
          .then((res) => {
            if (res.status === 409) {
              Swal.fire({
                position: "top-end",
                icon: "info",
                title: "User already exists in database.",
                showConfirmButton: false,
                timer: 1500,
              });
              return;
            }
            if (!res.ok) {
              throw new Error("Failed to save Google user to database");
            }
            return res.json();
          })
          .then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Logged in with Google!",
              showConfirmButton: false,
              timer: 1500,
            });
            navigate(redirectPath, { replace: true });
          });
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Google login failed.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 flex items-center justify-center px-6 py-10">
      <div className="hero-content flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl w-full">
      
        <div className="w-full max-w-md rounded-xl shadow-lg p-6">
          <Lottie animationData={loginLottie} loop={true} />
        </div>

      
        <div className="card w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-indigo-700">
            Welcome Back
          </h2>
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="label-text font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                className="input input-bordered w-full rounded-md border-indigo-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition"/>
            </div>

            <div>
              <label htmlFor="password" className="label-text font-semibold text-gray-700">
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                required
                className="input input-bordered w-full rounded-md border-indigo-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 transition"/>
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <div className="flex justify-between items-center text-sm mt-1">
              <Link
                to="#"
                className="link link-hover text-indigo-600 hover:text-indigo-800 transition">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md shadow-md transition">
              Login
            </button>
          </form>

        
          <div className="flex items-center gap-4 my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          
          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-100 transition" >
            <FcGoogle className="text-xl" />
            <span className="text-sm font-medium text-gray-700">
              Continue with Google
            </span>
          </button>



          <p className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 font-semibold hover:underline hover:text-indigo-800 transition">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};



export default Login;
