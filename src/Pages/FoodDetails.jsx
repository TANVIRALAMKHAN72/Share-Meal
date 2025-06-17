import React, { useEffect, useState } from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link, useParams } from 'react-router';

const FoodDetails = () => {
  const { id } = useParams(); 
  console.log(" Received food ID:", id);
  const [food, setFood] = useState(null);

  useEffect(() => {
    fetch(`https://share-meal-server-omega.vercel.app/foods/${id}`)
      .then(res => res.json())
      .then(data => setFood(data));
  }, [id]);

  if (!food) return <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>;

  return (
    <div>
        <Zoom>
             <h1 className='text-4xl font-semibold text-center mt-10'>Food Details</h1>
        </Zoom>

    <div className="max-w-xl mx-auto p-6 bg-base-200 rounded shadow my-10">
      <img src={food.foodImage} alt="" className="w-full h-60 object-cover rounded mb-4" />
      <h2 className="text-2xl font-bold mb-2">{food.foodName}</h2>
      <p><strong>Quantity:</strong> {food.foodQuantity}</p>
      <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
      <p><strong>Expires On:</strong> {food.expiredDateTime}</p>
      <p><strong>Donor:</strong> {food.donorName}</p>
      <p><strong>Additional Info:</strong> {food.additionalNotes || 'N/A'}</p>
      <div className="mt-4 text-right">
        <button
        
          className="btn btn-primary btn-sm">
           <Link to={`/request-food/${id}`}>Request</Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default FoodDetails;
