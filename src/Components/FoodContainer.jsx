import React, { useEffect, useState } from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router";

const FoodContainer = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await fetch("https://share-meal-server-omega.vercel.app/foods");
        const data = await res.json();
        const availableFoods = data.filter(
          (food) => food.foodStatus === "available"
        );
        setFoods(availableFoods.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching foods:", error);
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[200px] flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <div className="mt-10 mx-10">
      <Slide>
        <h1 className="text-4xl font-semibold text-center my-10">
          Recommended for You
        </h1>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
        {foods.map((food) => (
          <div
            key={food._id}
            className="bg-base-100 shadow-md rounded-xl overflow-hidden hover:shadow-xl transition duration-300" >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-48 object-cover"/>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{food.foodName}</h2>
              <p className=" text-gray-500 mb-1">
                Quantity:{" "}
                <span className="font-medium">{food.foodQuantity}</span>
              </p>
              <p className=" text-gray-500 mb-1">
                Location:{" "}
                <span className="font-medium">{food.pickupLocation}</span>
              </p>
              <p className=" text-gray-500">
                Expiry:{" "}
                <span className="font-medium">
                  {new Date(food.expiredDateTime).toLocaleDateString()}
                </span>
              </p>
              <div className="text-right mt-5">
                <Link to={`/food-details/${food._id}`}>
                  <button className="btn btn-primary btn-sm">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Link to="/available-foods">
        <button className="btn btn-primary btn-sm px-10 py-4 text-sm my-8 ml-10">
          See All
        </button>
      </Link>
    </div>
  );
};

export default FoodContainer;
