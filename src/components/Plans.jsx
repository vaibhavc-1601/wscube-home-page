import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaChartLine } from 'react-icons/fa';

export default function Plans() {
  return (
    <div className="py-[100px] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-6">
        {/* Web Development Plan */}
        <div className="shadow-xl h-full hover:scale-105 duration-500 rounded-xl p-6 flex flex-col items-center text-center">
          <FaLaptopCode className="text-6xl text-blue-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Web Development</h2>
          <p className="text-gray-600 text-sm mb-4">
            Build fast, responsive, and modern websites using the latest technologies like React, Next.js, Tailwind CSS, and more. We specialize in eCommerce, portfolios, business websites, and web applications.
          </p>
          <ul className="text-sm text-left text-gray-700 space-y-2 mb-6">
            <li>✅ Responsive Design</li>
            <li>✅ SEO Optimized</li>
            <li>✅ Modern UI/UX</li>
            <li>✅ Performance-First Architecture</li>
            <li>✅ CMS Integration</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* App Development Plan */}
        <div className="shadow-xl h-full hover:scale-105 duration-500 rounded-xl p-6 flex flex-col items-center text-center bg-gray-100">
          <FaMobileAlt className="text-6xl text-green-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">App Development</h2>
          <p className="text-gray-600 text-sm mb-4">
            Develop powerful Android & iOS mobile applications tailored to your business needs. Using React Native and Flutter, we ensure high-performance and visually stunning mobile experiences.
          </p>
          <ul className="text-sm text-left text-gray-700 space-y-2 mb-6">
            <li>✅ Cross-Platform Apps</li>
            <li>✅ Smooth Performance</li>
            <li>✅ Clean UI Design</li>
            <li>✅ API Integration</li>
            <li>✅ Play Store & App Store Support</li>
          </ul>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition">
            Get Started
          </button>
        </div>

        {/* Data Analytics Plan */}
        <div className="shadow-xl h-full hover:scale-105 duration-500 rounded-xl p-6 flex flex-col items-center text-center">
          <FaChartLine className="text-6xl text-purple-600 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Data Analytics</h2>
          <p className="text-gray-600 text-sm mb-4">
            Unlock business insights from your data. Our analytics services include dashboards, reporting, trend analysis, and predictive modeling using tools like Python, Excel, Power BI, and more.
          </p>
          <ul className="text-sm text-left text-gray-700 space-y-2 mb-6">
            <li>✅ Interactive Dashboards</li>
            <li>✅ Real-time Data Tracking</li>
            <li>✅ Business Intelligence Reports</li>
            <li>✅ Forecasting & Trends</li>
            <li>✅ Data Cleaning & Transformation</li>
          </ul>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

