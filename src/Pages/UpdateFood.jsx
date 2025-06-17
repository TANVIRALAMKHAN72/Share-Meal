import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const UpdateFood = ({ id, isOpen, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState("");
  const [foodQuantity, setFoodQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [expiredDateTime, setExpiredDateTime] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  useEffect(() => {
    if (!id || !isOpen) return;

    setLoading(true);

    fetch(`https://share-meal-server-omega.vercel.app/foods/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch food data");
        return res.json();
      })
      .then((data) => {
        console.log(data)
        setFoodName(data.foodName || "");
        setFoodImage(data.foodImage || "");
        setFoodQuantity(data.foodQuantity || "");
        setPickupLocation(data.pickupLocation || "");
        setExpiredDateTime(data.expiredDateTime ? data.expiredDateTime.slice(0, 16) : "");
        setAdditionalNotes(data.additionalNotes || "");
      })
      .catch((err) => {
        // toast.error(err.message);
      })
      .finally(() => setLoading(false));
  }, [id, isOpen]);

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
    };

    fetch(`https://share-meal-server-omega.vercel.app/foods/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodData),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to update food");
        return res.json();
      })
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Food updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        onClose();
      })
      .catch((err) => {
        // console.error(err);
      });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-base-200 p-6 rounded-md shadow-md max-w-3xl w-full relative">
        <button
          className="absolute top-2 right-2 text-xl font-bold"
          onClick={onClose}
          aria-label="Close modal">
          &times;
        </button>

        <h2 className="text-3xl font-semibold mb-6 text-center">Update Food</h2>

        
        {loading ? (
            <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">Food Image URL</label>
              <input
                type="url"
                value={foodImage}
                onChange={(e) => setFoodImage(e.target.value)}
                required
                placeholder="Enter image URL"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Food Name</label>
              <input
                type="text"
                value={foodName}
                onChange={(e) => setFoodName(e.target.value)}
                required
                placeholder="Enter food name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Food Quantity</label>
              <input
                type="text"
                value={foodQuantity}
                onChange={(e) => setFoodQuantity(e.target.value)}
                required
                placeholder="Quantity"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>
            <div>
              <label className="block mb-1 font-semibold">Pickup Location</label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
                placeholder="Enter pickup address or area"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div>
              <label className="block mb-1 font-semibold">Expired Date & Time</label>
              <input
                type="datetime-local"
                value={expiredDateTime}
                onChange={(e) => setExpiredDateTime(e.target.value)}
                required
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"/>
            </div>

            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">Additional Notes</label>
              <textarea
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
                placeholder="Any extra information (optional)"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                rows="3"/>
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded font-semibold hover:bg-purple-700 transition">
                Update Food
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateFood;
