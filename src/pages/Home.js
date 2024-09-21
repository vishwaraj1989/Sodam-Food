
import React from 'react';
import oilImage1 from '../assets/oil1.jpg'; // Path to the first oil image
import oilImage2 from '../assets/oil2.jpg'; // Path to the second oil image

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
      <div className="flex-grow">
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          <Card
            icon={<img src={oilImage1} alt="Oil Container 1" className="text-orange-500 text-5xl mb-4" />}
            title="Oil Container 1"
            description="Manage and track your oil resources efficiently with our dedicated features."
            buttonText="Manage"
          />
          <Card
            icon={<img src={oilImage2} alt="Oil Container 2" className="text-orange-500 text-5xl mb-4" />}
            title="Oil Container 2"
            description="Optimize your oil storage and management with our solutions."
            buttonText="Optimize"
          />
          <Card
            icon={<img src={oilImage1} alt="Oil Container 1" className="text-orange-500 text-5xl mb-4" />}
            title="Oil Container 3"
            description="Manage and track your oil resources efficiently with our dedicated features."
            buttonText="Manage"
          />
          <Card
            icon={<img src={oilImage1} alt="Oil Container 1" className="text-orange-500 text-5xl mb-4" />}
            title="Oil Container 4"
            description="Manage and track your oil resources efficiently with our dedicated features."
            buttonText="Manage"
          />
          <Card
            icon={<img src={oilImage1} alt="Oil Container 1" className="text-orange-500 text-5xl mb-4" />}
            title="Oil Container 5"
            description="Manage and track your oil resources efficiently with our dedicated features."
            buttonText="Manage"
          />
          <Card
            icon={<img src={oilImage1} alt="Oil Container 1" className="text-orange-500 text-5xl mb-4" />}
            title="Oil Container 6"
            description="Manage and track your oil resources efficiently with our dedicated features."
            buttonText="Manage"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Card Component
const Card = ({ icon, title, description, buttonText }) => (
  <div className="p-6 bg-white shadow-lg rounded-lg text-center transform transition duration-500 hover:scale-105 hover:shadow-2xl">
    {icon}
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    <button className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition duration-300 transform hover:-translate-y-1">
      {buttonText}
    </button>
  </div>
);

// Footer Component
const Footer = () => (
  <footer className="bg-purple-600 text-white shadow-lg rounded-t-lg py-4 w-full text-center mt-6">
    <div className="container mx-auto px-6">
      <p>&copy; {new Date().getFullYear()} Sodam Food. All rights reserved.</p>
      <p>Follow us on social media!</p>
      {/* Add social media icons or links here if needed */}
    </div>
  </footer>
);

export default Home;
