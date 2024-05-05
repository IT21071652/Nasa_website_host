import React from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../images/galaxy.jpeg'; // Import the background image

const Navbar = () => {
  return (
    <nav
      className="bg-gray-900 p-7"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="max-w-7xl mx-auto">
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-white hover:text-gray-300 font-bold text-lg">Home</Link>
          </li>
          <li className="flex space-x-4"> {/* Use flex and space-x for spacing */}
            <li>
              <Link to="/logout" className="text-white hover:text-gray-300">Logout</Link>
            </li>
          </li>
         
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
