import React, { useEffect, useState } from 'react';
import { fetchNasaData } from '../utils/utils';
import Navbar from "./Navbar";
import backgroundImage from "../images/bck.jpeg"; // Import the background image


const NASA_API_URL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos';

const MarsRoverPage = () => {
  const [roverData, setRoverData] = useState(null);

  useEffect(() => {
    const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

    const fetchData = async () => {
      try {
        const url = `${NASA_API_URL}?api_key=${NASA_API_KEY}&sol=1000`;
        const data = await fetchNasaData(url);
        setRoverData(data.photos);
      } catch (error) {
        console.error('Error fetching Mars Rover data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div><Navbar />
    <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
      >
    <div className="bg-black min-h-screen p-8 md:p-12 lg:p-16">
      <h2 className="text-3xl font-bold text-white mb-8">Mars Rover Photos</h2>
      {roverData ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roverData.map((photo) => (
            <div key={photo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={photo.img_src} alt={photo.camera.full_name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <p className="text-gray-800">{photo.camera.full_name}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default MarsRoverPage;
