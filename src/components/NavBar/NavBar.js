import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function NavBar() {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    const navItems = [
        { id: 1, text: 'Inicio', path: '/'},
        { id: 2, text: 'Catalogo', path: '/catalogo' },
        { id: 3, text: 'Rentadas', path: '/rentadas' },
    ];

    return (
        <>
            <ul ul className='hidden md:flex' >
                {
                    navItems.map(item => (
                        <Link to={item.path}>
                        <li
                            key={item.id}
                            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
                        >
                            {item.text}
                        </li>
                        </Link>
                    ))
                }
            </ul>

            < div onClick={handleNav} className='block md:hidden' >
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />
                }
            </div >


            < ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }
            >
                < h1 className='w-full text-3xl font-bold text-[#00df9a] m-4' > Cinema</h1 >

                {
                    navItems.map(item => (
                        <Link to={item.path}>
                        <li
                            key={item.id}
                            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
                        >
                            {item.text}
                        </li>
                        </Link>
                    ))
                }
            </ul >
        </>
    )
}

export default NavBar;