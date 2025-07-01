import React from "react";
import { FaHandsHelping, FaRecycle, FaSeedling, FaUsers } from "react-icons/fa";
import { Zoom } from "react-awesome-reveal";

const BlogPage = () => {
  return (
    <div className="max-w-6xl mx-auto my-12 px-4">
      <Zoom>
        <h1 className="text-4xl font-bold mb-8 text-center ">
          Welcome to ShareMeal Blog
        </h1>
      </Zoom>

      <div className="mb-10 p-6 rounded-lg shadow-lg bg-base-200">
        <div className="flex items-center mb-3 ">
          <FaHandsHelping className="text-3xl mr-3" />
          <h2 className="text-2xl font-semibold">What is ShareMeal?</h2>
        </div>
        <p className="text-gray-500">
          ShareMeal is a food-sharing platform where individuals and
          organizations can share their surplus food with people in need. The
          goal is simple: Reduce food waste and help feed the hungry.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-lg shadow-lg bg-base-200">
        <div className="flex items-center mb-3 ">
          <FaRecycle className="text-3xl mr-3" />
          <h2 className="text-2xl font-semibold">Why Food Sharing Matters?</h2>
        </div>
        <p className="text-gray-500">
          Every year, tons of edible food go to waste. By using ShareMeal, we
          can reduce food waste and support sustainability. Together, we can
          help both the environment and the community.
        </p>
      </div>

      <div className="mb-10 p-6 rounded-lg shadow-lg bg-base-200">
        <div className="flex items-center mb-3 ">
          <FaSeedling className="text-3xl mr-3" />
          <h2 className="text-2xl font-semibold">How ShareMeal Works?</h2>
        </div>
        <ul className="list-disc ml-6 text-gray-500 space-y-2">
          <li>Register and Login to your account.</li>
          <li>
            Post available food items with details like name, quantity, and
            expiry date.
          </li>
          <li>Others can browse and request available foods.</li>
          <li>After approval, the food can be picked up by the requester.</li>
        </ul>
      </div>

      <div className="mb-10 p-6 rounded-lg shadow-lg bg-base-200">
        <div className="flex items-center mb-3 ">
          <FaUsers className="text-3xl mr-3" />
          <h2 className="text-2xl font-semibold">
            Benefits of Using ShareMeal
          </h2>
        </div>
        <ul className="list-disc ml-6 text-gray-500 space-y-2">
          <li>✅ Reduce food waste.</li>
          <li>✅ Help people in need.</li>
          <li>✅ Build a kind and helpful community.</li>
          <li>✅ Support environmental sustainability.</li>
        </ul>
      </div>

      <div className="text-center mt-12">
        <h2 className="text-xl font-semibold mb-2">
          Join the Movement!
        </h2>
        <p className="text-gray-500">
          Sign up on ShareMeal and become a part of the food-sharing revolution
          today!
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
