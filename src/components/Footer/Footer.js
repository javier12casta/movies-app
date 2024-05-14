import React from 'react';
import { Link } from 'react-router-dom';
import cinemaLogo from '../../assets/cinema_logo.svg';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className='text-center w-full'>
            <Link to="/">
              <div className='flex items-center justify-center w-full my-4'>
                <img src={cinemaLogo} className='w-[40px] h-[40px] mr-2 ml-8' alt='Logo' />
                <h1 className='text-3xl font-bold text-[#00df9a]'>Cinema</h1>
              </div>
            </Link>
            <p>&copy; 2024 Cinema</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
