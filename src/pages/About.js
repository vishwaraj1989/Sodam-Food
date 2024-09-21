import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-green-50">
      <div className="text-center p-10 bg-white shadow-lg rounded-lg max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          We are a passionate team building awesome websites with modern technologies like React and Tailwind CSS.
        </p>
        <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-500 transition duration-300">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default About;
