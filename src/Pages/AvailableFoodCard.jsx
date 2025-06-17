import React from 'react';
import { useNavigate } from 'react-router';

const AvailableFoodCard = ({ food }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/food-details/${food._id}`)
  };

  return (
    <div className="bg-base-300 rounded-lg p-4 shadow hover:shadow-xl transition duration-300">
      <img
        src={food.foodImage}
        alt=''
        className="w-full h-48 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold mb-2">{food.foodName}</h3>
      <p><strong>Quantity:</strong> {food.foodQuantity}</p>
      <p><strong>Pickup Location:</strong> {food.pickupLocation}</p>
      <p><strong>Expires On:</strong> {food.expiredDateTime}</p>
      <p><strong>Donor:</strong> {food.donorName}</p>

      <div className="mt-4 text-right">
        <button
          onClick={handleViewDetails}
          className="btn btn-primary btn-sm" >
          View Details
        </button>
      </div>
    </div>
  );
};

export default AvailableFoodCard;
