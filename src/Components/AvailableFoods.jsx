import React, { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import AvailableFoodCard from '../Pages/AvailableFoodCard';
import { Zoom } from 'react-awesome-reveal';
import { FaThLarge, FaTh } from 'react-icons/fa';

const AvailableFoods = () => {
  const [sortOption, setSortOption] = useState('expiry-asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedFoods, setSortedFoods] = useState([]);
  const [isThreeCol, setIsThreeCol] = useState(true);

  const { data: foods = [], isLoading } = useQuery({
    queryKey: ['availableFoods'],
    queryFn: async () => {
      const res = await fetch('https://share-meal-server-omega.vercel.app/foods');
      const data = await res.json();
      return data.filter(food => food.foodStatus === 'available');
    }
  });

  useEffect(() => {
    let sorted = [...foods];
  
    if (sortOption === 'expiry-asc') {
      sorted.sort((a, b) => new Date(a.expiredDateTime) - new Date(b.expiredDateTime));
    } else if (sortOption === 'expiry-desc') {
      sorted.sort((a, b) => new Date(b.expiredDateTime) - new Date(a.expiredDateTime));
    }

    if (searchTerm) {
      sorted = sorted.filter(food =>
        food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setSortedFoods(sorted);
  }, [foods, sortOption, searchTerm]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }


  

  return (
    <div className="my-12 mx-6">
      
      <div className="relative flex items-center justify-center mb-10 min-h-[48px]">
        <Zoom>
          <h1 className="text-4xl font-semibold text-center">Available Foods</h1>
        </Zoom>
        <button
          onClick={() => setIsThreeCol(!isThreeCol)}
          className="absolute right-0 text-2xl text-primary"
          title="Toggle Column View" >
          {isThreeCol ? <FaThLarge /> : <FaTh />}
        </button>
      </div>

    
<div className="flex flex-col lg:flex-row items-center justify-between mb-12 gap-6">
  
  <div className="flex-1 hidden lg:block"></div>

  
  <div className="flex-1 flex justify-center">
    <div className="flex flex-col items-center">
      <label className="mb-2 font-semibold  text-center">Search by Food Name</label>
      <input
        type="text"
        placeholder="Enter food name"
        className="input input-bordered w-[250px] md:w-[300px] text-center"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}/>
    </div>
  </div>

  
  <div className="flex-1 flex justify-end">
    <div className="flex flex-col items-end">
      <label className="mb-2 font-semibold ">Sort By Expiry Date</label>
      <select
        className="select select-bordered w-full max-w-xs"
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)} >
        <option value="expiry-asc">Soonest First</option>
        <option value="expiry-desc">Latest First</option>
      </select>
    </div>
  </div>
</div>


      
      <div className={`grid grid-cols-1 md:grid-cols-2 ${isThreeCol ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-5`}>
        {sortedFoods.length > 0 ? (
          sortedFoods.map(food => (
            <AvailableFoodCard key={food._id} food={food} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No foods found.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
