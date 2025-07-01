import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP } from 'react-icons/fa';
import logo from '../assets/logo10.webp';


const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-10 px-4 sm:px-6 md:px-12 lg:px-20">
     
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        <div className="text-left">
          <div className="flex items-center gap-3 mb-2">
            <img className="w-12 h-12 rounded-full" src={logo} alt="ShareMeal logo" />
            <h2 className="text-2xl sm:text-3xl font-bold">ShareMeal</h2>
          </div>
          <div className="h-1 bg-red-600 w-full max-w-[210px] mb-3"></div>
          <p className="text-sm text-gray-400">
            ShareMeal is a platform to reduce food waste and connect those who care.
            Join us in sharing meals and spreading kindness.
          </p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="p-2 rounded-full w-9 h-9 hover:bg-red-500 transition border border-red-600" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="p-2 rounded-full w-9 h-9 hover:bg-red-500 transition border border-red-600" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="p-2 rounded-full w-9 h-9 hover:bg-red-500 transition border border-red-600" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <FaPinterestP className="p-2 rounded-full w-9 h-9 hover:bg-red-500 transition border border-red-600" />
            </a>
          </div>
        </div>

        <div className="text-left md:text-center">
          <h3 className="text-xl font-semibold mb-2">Phone & Email</h3>
          <div className="h-[2px] w-24 md:w-32 bg-red-600 mb-3 mx-0 md:mx-auto"></div>
          <p className="text-sm text-gray-400">+880 123-456-789</p>
          <p className="text-sm text-gray-400">contact@sharemeal.org</p>
        </div>

        <div className="text-left md:text-right">
          <h3 className="text-xl font-semibold mb-2">Our Address</h3>
          <div className="h-[2px] w-20 md:w-28 bg-red-600 mb-3 ml-0 md:ml-auto"></div>
          <p className="text-sm text-gray-400">Block-D, 2/5, Banasree</p>
          <p className="text-sm text-gray-400">Dhaka 1205, Bangladesh</p>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-12  border-t border-gray-700 pt-4">
        © 2025 ShareMeal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
