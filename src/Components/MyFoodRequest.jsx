import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Zoom } from 'react-awesome-reveal';

const MyFoodRequests = () => {
  const { user } = useContext(AuthContext);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      console.log('token in the context',user.accessToken)
      fetch(`https://share-meal-server-omega.vercel.app/food-requests?userEmail=${user.email}`,{
        headers : {
          authorization : `Bearer ${user.accessToken}`
        }
      })
        .then(res => res.json())
        .then(data => {
          setRequests(data);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [user]);

  if (loading) return <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>;

  return (
    <div className=" mx-auto p-6 my-10">
      <Zoom>
        <h2 className="text-3xl font-semibold mb-6 text-center">My Requested Foods</h2>
      </Zoom>
      {requests.length === 0 ? (
        <p className='text-center my-10'>You have not requested any food yet.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Donor Name</th>
              <th className="border border-gray-300 px-4 py-2">Pickup Location</th>
              <th className="border border-gray-300 px-4 py-2">Expire Date</th>
              <th className="border border-gray-300 px-4 py-2">Request Date</th>
              <th className="border border-gray-300 px-4 py-2">Additional Notes</th>
            </tr>
          </thead>
          <tbody>
            {requests.map(req => (
              <tr key={req._id}>
                <td className="border border-gray-300 px-4 py-2">{req.donorName}</td>
                <td className="border border-gray-300 px-4 py-2">{req.pickupLocation}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(req.expiredDateTime).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{new Date(req.requestDate).toLocaleString()}</td>
                <td className="border border-gray-300 px-4 py-2">{req.additionalNotes || '-'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyFoodRequests;
