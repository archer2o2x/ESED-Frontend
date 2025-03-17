import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex items-center p-6 bg-gray-900 shadow-md w-full">
      <div className="flex items-center space-x-4">
        <h1 className="text-white text-4xl font-bold">GCT</h1>
        <h1 className="text-white text-2xl font-semibold">Greenwich Community Theatre</h1>
      </div>
      <nav className="ml-[5%]">
        <ul className="flex space-x-8">
          <li><Link to="/" className="text-white text-lg hover:text-yellow-500">Home</Link></li>
          <li><Link to="/plays" className="text-white text-lg hover:text-yellow-500">Plays</Link></li>
          <li><Link to="/my-tickets" className="text-white text-lg hover:text-yellow-500">My Tickets</Link></li>
          <li><Link to="/reviews" className="text-white text-lg hover:text-yellow-500">Reviews</Link></li>
          <li><Link to="/contact" className="text-white text-lg hover:text-yellow-500">Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;