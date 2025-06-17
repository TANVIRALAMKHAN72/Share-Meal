import React from 'react';
import { Link } from 'react-router';
import errorLottie from '../assets/error.json';
import errorLottie2 from '../assets/error2.json';
import Lottie from 'lottie-react';


const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 text-center px-6">

           <div className="flex flex-col items-center justify-center space-y-0">
  <Lottie
    style={{ width: '120px', marginBottom: '-40px' }}
    animationData={errorLottie2}
    loop={true} />
  <Lottie
    style={{ width: '300px' }}
    animationData={errorLottie}
    loop={true} />
</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                Page Not Found
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
                Sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg transition" >
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;
