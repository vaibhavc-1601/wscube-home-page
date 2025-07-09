import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 md:px-10 lg:px-16 pt-12 pb-8">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">WsCube Tech</h2>
          <p className="text-gray-400 text-sm">
            Building the digital future with web, app, and marketing solutions tailored for your business growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Services</a></li>
            <li><a href="#" className="hover:text-white">Portfolio</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-blue-500 mt-1" />
              <span>Plot No. 5, Udaipur Tech Park, Rajasthan, India</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              <span>info@microcom.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-gray-400 mb-4 text-sm">Subscribe to our newsletter for updates & insights.</p>
          <form className="flex flex-col sm:flex-row items-start sm:items-center">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full sm:w-auto flex-1 p-2 rounded bg-gray-800 border border-gray-600 text-sm outline-none mb-2 sm:mb-0 sm:mr-2"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-semibold w-full sm:w-auto">
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-6 text-lg">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-300 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Microcom International. All rights reserved.
      </div>
    </footer>
  );
}
