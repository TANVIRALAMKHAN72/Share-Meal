import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { Zoom } from "react-awesome-reveal";


const AddFood = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [expiredDateTime, setExpiredDateTime] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!foodName || !foodImage || !foodQuantity || !pickupLocation || !expiredDateTime) {
      toast.error("Please fill all required fields.");
      return;
    }

    const foodData = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      donorName: user.displayName || user.email,
      donorEmail: user.email,
      donorPhoto: user.photoURL || "",
      foodStatus: "available",
    };

    fetch("https://share-meal-server-omega.vercel.app/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add food");
        return res.json();
      })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Food added successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        setFoodName("");
        setFoodImage("");
        setFoodQuantity("");
        setPickupLocation("");
        setExpiredDateTime("");
        setAdditionalNotes("");
        navigate("/available-foods");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="my-12">
 <Zoom>
    <h2 className="text-4xl font-semibold mb-8 text-center">Add Food</h2>
 </Zoom>
    <div className="max-w-4xl mx-auto p-6 bg-base-200 rounded-md shadow-md mt-10 ">
     
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
         <div className="md:col-span-2">
  <label className="block mb-1 font-semibold">
    Food Image URL
  </label>
  <input
    type="url"
    value={foodImage}
    onChange={(e) => setFoodImage(e.target.value)}
    required
    placeholder="Enter image URL"
    className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
/>
</div>



        <div>
          <label className="block mb-1 font-semibold">Food Name</label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            required
            placeholder="Enter food name"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

     

        
        <div>
          <label className="block mb-1 font-semibold">Food Quantity</label>
          <input
            type="text"
            value={foodQuantity}
            onChange={(e) => setFoodQuantity(e.target.value)}
            required
            placeholder="Quantity"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

      
        <div>
          <label className="block mb-1 font-semibold">Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            required
            placeholder="Enter pickup address or area"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

      
        <div>
          <label className="block mb-1 font-semibold">Expired Date & Time</label>
          <input
            type="datetime-local"
            value={expiredDateTime}
            onChange={(e) => setExpiredDateTime(e.target.value)}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
        </div>

      
        <div className="md:col-span-2">
          <label className="block mb-1 font-semibold">Additional Notes</label>
          <textarea
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            placeholder="Any extra information (optional)"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
            rows="3" />
        </div>

      
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition" >
            Add Food
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddFood;
