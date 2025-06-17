import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaRecycle, FaHeart, FaLeaf, FaUtensils, FaUsers } from 'react-icons/fa';



const SharemealBenifit = () => {
    return (
         <div className="py-16 px-4 md:px-20 bg-gray-100">
      <Slide>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        How ShareMeal Helps Us
      </h2>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        


       <Fade>
         <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaRecycle className="text-4xl text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Reduces Food Waste</h3>
          <p className="text-gray-700">
            Prevents surplus food from being wasted by redirecting it to the people who need it most.
          </p>
        </div>
       </Fade>

      


      <Fade>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaHeart className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Builds Empathy</h3>
          <p className="text-gray-700">
            Encourages a caring mindset and promotes sharing with those less fortunate.
          </p>
        </div>
      </Fade>




        
       <Fade>
         <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaLeaf className="text-4xl text-emerald-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Protects the Environment</h3>
          <p className="text-gray-700">
            Less food waste means reduced landfill use and a smaller carbon footprint.
          </p>
        </div>
       </Fade>




        
      <Fade>
          <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaUtensils className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Feeds the Hungry</h3>
          <p className="text-gray-700">
            Provides nutritious meals to those who are food insecure, offering them hope and dignity.
          </p>
        </div>
      </Fade>



        
       <Fade>
         <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaUsers className="text-4xl text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Strengthens Communities</h3>
          <p className="text-gray-700">
            Connects people and organizations with a shared mission of kindness and social support.
          </p>
        </div>
       </Fade>

       
      </div>
    </div>
    );
};

export default SharemealBenifit;