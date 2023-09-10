import React from 'react';

function Footer() {
  return (
    <div className="py-5 mt-5 bg-indigo-800 text-center text-white rounded-t-lg">
      <a href="#hero" className="block text-2xl md:text-3xl font-semibold hover:text-indigo-500">
        ANTARIKSH Club
      </a>
      <a
        href="https://github.com/Samael3003"
        className="text-sm md:text-md hover:text-indigo-500"
      >
        Astronomy Club of VI
      </a>
      <div className="mt-3">
        <p className="text-xs text-gray-300">
          Follow us on social media:
        </p>
        <div className="flex justify-center mt-2 space-x-3">
          <a href="https://www.instagram.com/antarikshclubvi/" className="text-lg hover:text-indigo-500">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/company/antariksh-astronomy-club/" className="text-lg hover:text-indigo-500">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.youtube.com/@antarikshclubvi" className="text-lg hover:text-indigo-500">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </div>
      <p className="text-xs mt-4 text-gray-300">
        © AntarikshVI {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
