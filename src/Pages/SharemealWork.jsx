import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { FaUtensils, FaHandsHelping, FaSmile } from 'react-icons/fa';


const SharemealWork = () => {



    return (



        <div>
              <div className="py-16 bg-gray-100 px-4 md:px-20">
                 <Slide>
             <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">How ShareMeal Works</h2>
          </Slide>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    
        <Fade>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaUtensils className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Donate Surplus Food</h3>
          <p className="text-gray-600">
            Individuals or restaurants can donate extra food through our platform by filling out a simple form.
          </p>
        </div>
        </Fade>

        

        <Fade>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaHandsHelping className="text-4xl text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">We Distribute with Care</h3>
          <p className="text-gray-600">
            Our volunteers collect the food and ensure safe, hygienic packaging and delivery to people in need.
          </p>
        </div>
        </Fade>

        



        <Fade>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-2xl transition">
          <FaSmile className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Spread Smiles</h3>
          <p className="text-gray-600">
            You help reduce waste and make someone’s day a little brighter. Every meal shared counts!
          </p>
        </div>
        </Fade>

        
      </div>
      
    </div>
        </div>
    );
};

export default SharemealWork;