import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';
import cinemaLogo from '../../assets/cinema_logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (        
        <div className='bottom-0 sticky top-0 bg-black flex justify-between items-center h-24 max-w-[100%] mx-auto px-4 text-white'>
            <Link to="/">
            <div className='flex items-left justify-left w-full'>
                <img src={cinemaLogo} className='w-[40px] h-[40px] mr-2 ml-8' alt='Logo' />
                <h1 className='text-3xl font-bold text-[#00df9a]'>Cinema</h1>
            </div>
            </Link>
            <NavBar />
        </div>
    );
}

export default Header;