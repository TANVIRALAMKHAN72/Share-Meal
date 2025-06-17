import React, { useContext } from "react";
import Lottie from "lottie-react";
import registerLottie from "../assets/register.json";
import { Link, useNavigate, useLocation } from "react-router"; 
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const Register = () => {
  const { createUser, googleSignIn, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.from?.pathname || "/";

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const isValidLength = password.length >= 6;

    if (!hasUpperCase) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must include at least one uppercase letter.",
        timer: 2500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
      return;
    }

    if (!hasLowerCase) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must include at least one lowercase letter.",
        timer: 2500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
      return;
    }

    if (!isValidLength) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must be at least 6 characters long.",
        timer: 2500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
      return;
    }

    createUser(email, password)
      .then((result) => {
        const newUser = result.user;
        return updateProfile(newUser, {
          displayName: name,
          photoURL: photo,
        }).then(() => newUser);
      })
      .then((newUser) => {
        const currentUser = auth.currentUser;
        if (currentUser) {
          setUser({ ...currentUser });
        }

        return fetch("https://share-meal-server-omega.vercel.app/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: newUser.uid,
            name: newUser.displayName,
            email: newUser.email,
            photoURL: newUser.photoURL,
          }),
        });
      })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to save user to database");
        return res.json();
      })
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Registered successfully!",
          timer: 1500,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
        form.reset();
        navigate(redirectPath, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          timer: 2500,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;

        return fetch("https://share-meal-server-omega.vercel.app/users", {
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
                icon: "info",
                title: "Info",
                text: "User already exists in database.",
                timer: 2000,
                showConfirmButton: false,
                position: "top-end",
                toast: true,
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
              icon: "success",
              title: "Google SignIn successful!",
              timer: 1500,
              showConfirmButton: false,
              position: "top-end",
              toast: true,
            });
            navigate(redirectPath, { replace: true });
          });
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          timer: 2500,
          showConfirmButton: false,
          position: "top-end",
          toast: true,
        });
      });
  };


  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 via-pink-100 to-yellow-100 flex items-center justify-center px-6 py-10">
      <div className="hero-content flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl w-full">
        <div className="w-full max-w-md rounded-xl shadow-lg p-6">
          <Lottie animationData={registerLottie} loop={true} />
        </div>

        <div className="card w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
          <h2 className="text-3xl font-extrabold text-center mb-6 text-purple-700">
            Create an Account
          </h2>
          <form onSubmit={handleRegister} className="space-y-3" autoComplete="off">
            <div>
              <label htmlFor="name" className="label-text font-semibold text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your full name"
                className="input input-bordered w-full border-purple-300 focus:border-purple-500 focus:ring-purple-200 transition" />
            </div>

            <div>
              <label htmlFor="photo" className="label-text font-semibold text-gray-700">
                Photo URL
              </label>
              <input
                id="photo"
                type="url"
                name="photo"
                placeholder="Your photo URL"
                className="input input-bordered w-full border-purple-300 focus:border-purple-500 focus:ring-purple-200 transition" />
            </div>

            <div>
              <label htmlFor="email" className="label-text font-semibold text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Enter your email address"
                className="input input-bordered w-full border-purple-300 focus:border-purple-500 focus:ring-purple-200 transition" />
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
                placeholder="Enter your password"
                className="input input-bordered w-full border-purple-300 focus:border-purple-500 focus:ring-purple-200 transition" />
            </div>

            <div className="flex justify-between items-center text-sm mt-1">
              <a
                href="#"
                className="link link-hover text-purple-600 hover:text-purple-800 transition" >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-md shadow-md transition" >
              Register Now
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-purple-600 font-semibold hover:underline hover:text-purple-800 transition">
              Login here
            </Link>
          </p>

          <div className="flex items-center gap-4 my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-md py-2 hover:bg-gray-300 transition">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
              alt="Google"
              className="w-5 h-5"/>
            <span className="text-sm font-medium text-gray-700">Continue with Google</span>
          </button>

        </div>
      </div>
    </div>
  );
};

export default Register;
