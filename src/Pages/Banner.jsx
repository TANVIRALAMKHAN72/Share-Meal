import React from 'react';
import banner from '../assets/istockphoto-1497454089-170667a.jpg';
import { Typewriter } from 'react-simple-typewriter';
import { Zoom } from 'react-awesome-reveal';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div className="relative w-full">
        
            <img className="w-full h-[80vh] object-cover" src={banner} alt="Banner" />

            <div className="absolute inset-0 flex items-center justify-end text-white px-4 md:px-20 bg-opacity-40">
                <div className="text-right max-w-xl">
                     <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-green-600 bg-clip-text text-transparent min-h-[4rem] md:min-h-[5rem] overflow-hidden" >
                        <Typewriter
                            words={[
                                'Welcome to ShareMeal',
                                'Reduce Food Waste',
                                'Feed Someone Today'
                            ]}
                            loop={0}
                            cursor
                            cursorStyle=""
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </h1>
                  <Zoom>
                      <motion.p className="text-base md:text-lg" 
                      animate={
                        {
                            color: ['#e59866', '#eb984e', '#f5b041 ', '#f4d03f', '#2ecc71', '#27ae60', '#16a085', '#16a085', '#3498db'],
                            transition:{ duration: 4, repeat: Infinity}
                        }}
                      >
                        Reducing food waste and spreading kindness one plate at a time. 
                        Join our<br></br> mission to share meals with those in need.
                    </motion.p>
                  </Zoom>

                </div>
            </div>
        </div>
    );
};

export default Banner;
