import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import backgroundImage from "../images/bck.jpeg"; // Import the background image
import apodImage from '../images/apod.jpeg';
import marsImage from '../images/mars.jpeg';
import epicImage from '../images/epic.jpeg';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-yellow-200 py-8 px-4 mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">NASA Website</h1>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <Link to="/apod">
                <img src={apodImage} alt="Astronomy" className="w-64 h-64 rounded-full shadow-lg mb-4" />
                <div className="text-lg font-semibold text-center">Astronomy Picture of the Day</div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <Link to="/mars-rover">
                <img src={marsImage} alt="Mars Rover" className="w-64 h-64 rounded-full shadow-lg mb-4" />
                <div className="text-lg font-semibold text-center">Mars Rover Photos</div>
              </Link>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-lg shadow-lg bg-gray-200 hover:bg-gray-300 transition-colors duration-300">
              <Link to="/epic">
                <img src={epicImage} alt="EPIC" className="w-64 h-64 rounded-full shadow-lg mb-4" />
                <div className="text-lg font-semibold text-center">EPIC</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
