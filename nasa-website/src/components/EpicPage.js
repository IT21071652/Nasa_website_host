import React, { useEffect, useState } from 'react';
import { fetchNasaData } from '../utils/utils';
import '../styles/tailwind.css';
import Navbar from "./Navbar";
import backgroundImage from "../images/g3.jpeg"; // Import the background image



const NASA_EPIC_URL = 'https://api.nasa.gov/EPIC/api/natural/images';

const EpicPage = () => {

  const [earthData, setEarthData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;

    const fetchData = async () => {
      try {
        const url = `${NASA_EPIC_URL}?api_key=${NASA_API_KEY}`;
        const data = await fetchNasaData(url);
        setEarthData(data);
      } catch (error) {
        console.error('Error fetching EPIC data:', error);
      }
    };

    fetchData();
  }, []);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = earthData?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div><Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
      >
    <div className="bg-black min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold text-white mb-4">EPIC</h2>
      {earthData ? (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {currentItems?.map((image) => (
              <div
                key={image.identifier}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                style={{
                  maxWidth: '300px',
                }}
              >
                <img
                  src={`https://api.nasa.gov/EPIC/archive/natural/${image.date
                    .split(' ')[0]
                    .replace(/-/g, '/')}/png/${image.image}.png?api_key=${
                    process.env.REACT_APP_NASA_API_KEY
                  }`}
                  alt="Earth Imagery"
                  className="w-full"
                />
                <div className="p-4">
                  <p className="text-gray-800">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-4">
            {Array.from(
              { length: Math.ceil((earthData?.length || 0) / itemsPerPage) },
              (_, index) => index + 1
            ).map((pageNumber) => (
              <button
                key={pageNumber}
                className={`mx-2 px-4 py-2 rounded-md ${
                  currentPage === pageNumber
                    ? 'bg-white text-black'
                    : 'bg-gray-500 text-white'
                }`}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default EpicPage;