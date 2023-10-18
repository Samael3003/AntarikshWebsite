// ABOUT.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionTitle from './SectionTitle';

const titleStyle = {
  fontSize: '1.5rem', // Adjust the font size as needed
  color: 'white', // Change the color to your desired value
  fontWeight: 'bold', // You can adjust the font weight
  marginBottom: '10px', // Add margin at the bottom for spacing
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Apply text shadow for a more attractive look
};

function About() {
  const [apodData, setApodData] = useState({
    title: '',
    url: '',
  });

  useEffect(() => {
    // Fetch NASA's APOD data
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=IsXANgma8Kq5Nfbxh7cSk9SgGQ6mqvuI6qDrbPve')
      .then((response) => {
        setApodData({
          title: response.data.title,
          url: response.data.url,
        });
      })
      .catch((error) => {
        console.error('Error fetching APOD:', error);
      });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 py-12">
      <div className="w-full md:w-6/12">
        <SectionTitle>PICTURE OF THE DAY:</SectionTitle>
        <p>{/* Add your research domain content here */}</p>
      </div>
      <div className="w-full md:w-6/12 rounded-md overflow-hidden">
        <h3 style={titleStyle}>{apodData.title}</h3>
        {apodData.url && (
          <img
            src={apodData.url}
            alt="NASA APOD"
            className="w-full h-64 md:h-96 rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
}

export default About;
