// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   return (
//     <nav className="bg-purple-600 shadow-2xl rounded-lg"> {/* Added rounded corners */}
//       <div className="container mx-auto px-6 py-3">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             {/* Wrap logo and text with Link to navigate to the home page */}
//             <Link to="/" className="flex items-center">
//               <img src="/sodamlogo.png" alt="Logo" className="h-10 mr-4" />
//               <h1 className="text-white text-2xl font-bold">Sodam Food</h1>
//             </Link>
//           </div>
//           <ul className="flex space-x-4">
//             <li>
//               <Link to="/about" className="text-white hover:text-gray-300">
//                 About
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-purple-600 shadow-2xl rounded-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img src="/sodamlogo.png" alt="Logo" className="h-10 mr-4" />
          <h1 className="text-white text-2xl font-bold">Sodam Food</h1>
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-1 rounded-full focus:outline-none"
          />
        </div>
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        {isOpen && (
          <div className="md:hidden flex flex-col items-start bg-purple-600 p-4 rounded-lg mt-2">
            <Link to="/about" className="text-white hover:text-gray-300 py-1">
              About
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="mt-2 px-3 py-1 rounded-full focus:outline-none"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
