import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router';

const JoinMovementSection = () => {
    return (
       <div className=" p-6 rounded-lg shadow-lg bg-base-100 text-center">
    <Slide>
        <div className="flex items-center justify-center mb-3 ">
      <FaUsers className="text-4xl mr-3" />
      <h2 className="text-4xl font-semibold">Join The Movement</h2>
    </div>
    </Slide>
    <p className="text-gray-500 mb-4">
      Become a part of the food-sharing revolution. Register today and start making a difference!
    </p>
    <Link to="/register" className="btn btn-primary mb-10">
      Get Started
    </Link>
  </div>
    );
};

export default JoinMovementSection;