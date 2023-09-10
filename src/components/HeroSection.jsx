import React from 'react';
import LogoImage from '../images/logo.png'; // Import your logo image

function HeroSection() {
  return (
    <div id="hero" className="flex items-center justify-center py-20">
      <div className="flex items-center max-w-screen-xl mx-auto px-4">
        <div className="md:flex-1 text-center md:text-left md:pr-10">
          <h4 className="text-2xl md:text-4xl mb-1 md:mb-3 text-indigo-600 dark:text-indigo-500 font-semibold">
            Welcome to <b>ANTARIKSH</b>
          </h4>
          <p className="text-md md:text-xl max-w-xl mb-3 text-gray-600 dark:text-gray-300">
            Antariksh - Astronomy Club, is a student-driven and faculty-guided entity encouraging astronomy enthusiasts to build their careers in the field of astronomy. The objective of this club is to motivate students towards the field of astronomy by emphasizing the opportunities for engineers in the field of astronomy through arranging guidance lectures, stargazing programmes, and astrophysics forum.
          </p>
          <div className="flex space-x-2 my-2">
            <a
              href="https://www.instagram.com/antarikshclubvi/"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
            >
              INSTAGRAM
            </a>
            <a
              href="https://www.linkedin.com/company/antariksh-astronomy-club/"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
            >
              LINKEDIN
            </a>
            <a
              href="https://www.youtube.com/@antarikshclubvi"
              className="inline-block px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-md"
            >
              YOUTUBE
            </a>
          </div>

        </div>
        <div className="md:flex-1 text-center md:text-right">
          <img src={LogoImage} alt="ANTARIKSH Logo" className="w-48 md:w-64 mx-auto" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
