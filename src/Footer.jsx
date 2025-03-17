import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 text-center">
      <p>&copy; 2025 Greenwich Community Theatre. All rights reserved.</p>
      <p>Follow us: 
        <a href="https://facebook.com" className="text-yellow-500 hover:text-yellow-700 ml-2">Facebook</a> | 
        <a href="https://twitter.com" className="text-yellow-500 hover:text-yellow-700 ml-2">Twitter</a> | 
        <a href="https://instagram.com" className="text-yellow-500 hover:text-yellow-700 ml-2">Instagram</a>
      </p>
    </footer>
  );
};

export default Footer;