import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext';


const FoodRequest = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [food, setFood] = useState(null);
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [requestStatus, setRequestStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:3000/foods/${id}`)
      .then(res => res.json())
      .then(data => setFood(data));
  }, [id]);

  if (!food) return <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>;

  const handleSubmitRequest = async (e) => {
  e.preventDefault();

  const requestData = {
    foodId: food._id,
    foodName: food.foodName,
    foodImage: food.foodImage,
    donorEmail: food.donorEmail,
    donorName: food.donorName,
    userEmail: user?.email || '',
    requestDate: new Date().toISOString(),
    pickupLocation: food.pickupLocation,
    expiredDateTime: food.expiredDateTime,
    additionalNotes,
  };

  try {
    const res = await fetch('http://localhost:3000/food-requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

    if (res.ok) {
      setRequestStatus('Request submitted successfully!');
      setAdditionalNotes('');
      setTimeout(() => navigate('/my-food-request'), 2000); 
    } else {
      setRequestStatus('Failed to submit request.');
    }
  } catch {
    setRequestStatus('Error submitting request.');
  }
};


  return (
    <div>
    <h2 className="text-3xl font-semibold my-5 text-center">Request Food</h2>
    <div className="max-w-xl mx-auto p-6 bg-base-200 rounded shadow my-10">
      
      <form onSubmit={handleSubmitRequest} className="space-y-4">
         <div>
          <label className="block font-semibold">Food Image</label>
          <img src={food.foodImage} alt="food" className="w-full h-52 object-cover rounded" />
        </div>
        <div>
          <label className="block font-semibold">Food Name</label>
          <input type="text" value={food.foodName} disabled className="input input-bordered w-full text-black" />
        </div>

        <div>
          <label className="block font-semibold">Donor Email</label>
          <input type="email" value={food.donorEmail} disabled className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold">Donor Name</label>
          <input type="text" value={food.donorName} disabled className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold">Your Email</label>
          <input type="email" value={user?.email || ''} disabled className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold">Request Date</label>
          <input type="text" value={new Date().toLocaleString()} disabled className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold">Pickup Location</label>
          <input type="text" value={food.pickupLocation} disabled className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold">Expires On</label>
          <input type="text" value={food.expiredDateTime} disabled className="input input-bordered w-full" />
        </div>

        <div>
          <label className="block font-semibold">Additional Notes</label>
          <textarea
            value={additionalNotes}
            onChange={e => setAdditionalNotes(e.target.value)}
            className="textarea textarea-bordered w-full"
            placeholder="Write your notes here..."
            rows={3} />
        </div>

        <div className="flex justify-end space-x-3">
          <button type="button" onClick={() => navigate(-1)} className="btn btn-outline">Cancel</button>
          <button type="submit" className="btn btn-primary">Request</button>
        </div>
      </form>

      {requestStatus && (
        <p className="mt-3 text-center text-green-600">{requestStatus}</p>
      )}
    </div>
    </div>
  );
};

export default FoodRequest;
