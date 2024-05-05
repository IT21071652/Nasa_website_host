import React, { useEffect, useState } from 'react';
import { fetchNasaData } from '../utils/utils';
import Navbar from "./Navbar";
import backgroundImage from "../images/calm1.jpeg"; // Import the background image

const NASA_API_URL = 'https://api.nasa.gov/planetary/apod';

const ApodPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [apodData, setApodData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;
    const fetchData = async () => {
      try {
        setLoading(true);
        const url = `${NASA_API_URL}?api_key=${NASA_API_KEY}&date=${selectedDate}`;
        const data = await fetchNasaData(url);
        setApodData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching APOD data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div>
      <Navbar />
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16"
        style={{ backgroundImage: `url(${backgroundImage})` }} // Apply background image
      >
        <div className="max-w-xl mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
          <h2 className="text-gray-800 text-3xl font-semibold mb-4 bg-yellow-500 p-4 rounded-t-lg">
            Astronomy Picture of the Day
          </h2>
          <div className="p-4">
            <label htmlFor="datePicker" className="text-gray-800 font-semibold mb-2 block">
              Select Date:
            </label>
            <input
              type="date"
              id="datePicker"
              value={selectedDate}
              onChange={handleDateChange}
              className="border-gray-300 rounded-md shadow-sm focus:border-yellow-400 focus:ring focus:ring-yellow-400 focus:ring-opacity-50 w-full"
            />
          </div>
          {loading ? (
            <p className="text-gray-800 p-4">Loading...</p>
          ) : apodData ? (
            <div className="p-4">
              <h3 className="text-gray-800 text-xl font-semibold mb-2">{apodData.title}</h3>
              <img src={apodData.url} alt={apodData.title} className="w-full rounded-lg mb-4" />
              <p className="text-gray-800">{apodData.explanation}</p>
            </div>
          ) : (
            <p className="text-gray-800 p-4">No data available for the selected date.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApodPage;
