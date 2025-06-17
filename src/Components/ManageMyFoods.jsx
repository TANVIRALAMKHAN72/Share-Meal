import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import UpdateFood from "../Pages/UpdateFood";
import { useNavigate, useParams } from "react-router"; 
import { Zoom } from "react-awesome-reveal";
import { MdEditSquare } from "react-icons/md";
import { RiDeleteBin5Fill } from "react-icons/ri";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { foodId } = useParams(); 

  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchFoods = () => {
    setLoading(true);
    fetch(`https://share-meal-server-omega.vercel.app/foods?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setFoods(data);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Failed to fetch foods");
        setLoading(false);
      });
  };

  useEffect(() => {
    if (user?.email) fetchFoods();
  }, [user]);

  
  const openModal = (id) => {
    navigate(`/manage-my-foods/${id}`);
  };

  
  const closeModal = () => {
    navigate(`/manage-my-foods`);
    fetchFoods(); 
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://share-meal-server-omega.vercel.app/foods/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Delete failed");
            toast.success("Food deleted successfully");
            fetchFoods();
          })
          .catch((err) => toast.error(err.message));
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">

      <Zoom>
        <h1 className="text-3xl font-bold mb-6 text-center">Manage My Foods</h1>
      </Zoom>

      {loading ? (
        <div className="min-h-screen flex justify-center items-center">
    <span className="loading loading-spinner loading-lg text-primary"></span>
  </div>
      ) : foods.length === 0 ? (
        <p className="text-center text-gray-500 my-16">
          You haven't added any foods yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foods.map((food) => (
            <div
              key={food._id}
              className="bg-base-300 rounded-lg p-4 shadow hover:shadow-xl transition duration-300">
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="w-full h-48 object-cover rounded-md mb-4"
              />

              <h3 className="text-xl font-semibold mb-2">{food.foodName}</h3>
              <p>
                <strong>Quantity:</strong> {food.foodQuantity}
              </p>
              <p>
                <strong>Pickup Location:</strong> {food.pickupLocation}
              </p>
              <p>
                <strong>Expires On:</strong>{" "}
                {new Date(food.expiredDateTime).toLocaleString()}
              </p>
              <p>
                <strong>Donor:</strong> {food.donorName}
              </p>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => openModal(food._id)}
                  className="bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700" >
                  <MdEditSquare />
                </button>
                <button
                  onClick={() => handleDelete(food._id)}
                  className="bg-red-600 text-white px-2 py-1 rounded hover:bg-red-700">
                  <RiDeleteBin5Fill />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {foodId && (
        <UpdateFood id={foodId} isOpen={true} onClose={closeModal} />
      )}
    </div>
  );
};

export default ManageMyFoods;
