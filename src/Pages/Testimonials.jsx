import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { FaQuoteLeft } from 'react-icons/fa';




const Testimonials = () => {


    return (
        <div className="py-16 px-4 md:px-20 bg-gray-50">
      <Slide>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        What People Say
      </h2>
      </Slide>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
       <Zoom>
         <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition relative">
          <FaQuoteLeft className="text-3xl text-emerald-400 absolute top-4 left-4 opacity-20" />
          <p className="text-gray-700 mb-4">
            ShareMeal helped my family during a tough time. I’m forever grateful!
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-300"
              src="https://i.ibb.co/Fbc5N9jL/compressed-0bda793161cdc693cfd853bad8f4954c.webp"
              alt="" />
            <div>
              <h4 className="text-md font-semibold">Md. Hasan</h4>
              <p className="text-sm text-gray-500">Meal Receiver, Dhaka</p>
            </div>
          </div>
        </div>

       </Zoom>
       <Zoom>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition relative">
          <FaQuoteLeft className="text-3xl text-emerald-400 absolute top-4 left-4 opacity-20" />
          <p className="text-gray-700 mb-4">
            Volunteering with ShareMeal gave my life a new purpose. It’s heart-touching work!
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-300"
              src="https://i.ibb.co/ZvXG6gd/images.jpg"
              alt=""/>
            <div>
              <h4 className="text-md font-semibold">Tanvir</h4>
              <p className="text-sm text-gray-500">Volunteer, Chattogram</p>
            </div>
          </div>
        </div>
        </Zoom>

        <Zoom>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-xl transition relative">
          <FaQuoteLeft className="text-3xl text-emerald-400 absolute top-4 left-4 opacity-20" />
          <p className="text-gray-700 mb-4">
            We regularly donate extra meals. It’s amazing to see it reach those in need.
          </p>
          <div className="flex items-center gap-4 mt-6">
            <img
              className="w-12 h-12 rounded-full object-cover border-2 border-emerald-300"
              src="https://i.ibb.co/HSQ95xx/360-F-970218906-CNYq-VPc-Ow-KAq1-IMEem-Mc-UB2-XFhcms-Fih.jpg"
              alt="" />
            <div>
              <h4 className="text-md font-semibold">Nafisa Akter</h4>
              <p className="text-sm text-gray-500">Partner Restaurant</p>
            </div>
          </div>
        </div>
        </Zoom>
      </div>
    </div>
    );
};

export default Testimonials;