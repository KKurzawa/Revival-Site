import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../../assets/Logos/logo.png';
import './Navbar.css'

const navLinks = [
    {
        title: 'Shows',
        link: '/shows',
    },
    {
        title: 'Band',
        link: '/band',
    },
    {
        title: 'Testimonials',
        link: '/testimonials'
    },
    {
        title: 'Contact',
        link: '/contact',
    },
]

function Navbar() {
    // const [open, setOpen] = useState(false);

    // const handleMenu = () => {
    //     setOpen((prev) => !prev);
    //     console.log(open);
    // };

    return (
        // <div className='bg-black h-36 lg:h-44 w-full flex items-center'>
        <header className='mainContainer flex flex-col lg:flex-row items-center justify-center bg-[#130253] w-full h-80 border-b-[17px] border-[#c94c2c]'>
            <div className='lg:w-full'>
                <a href='/' className=''>
                    <img src={Logo} alt='RevivalLogo' className='logo bg-[#de4c28] w-full mt-10 lg:mt-0 lg:ml-3 transition-all duration-700 hover:bg-[#de4c28cc] lg:hover:w-[300%] rounded-[10px]'></img></a>
            </div>
            <div className='w-full pt-5 lg:ml-3 pb-5'>
                <div className='flex justify-evenly'>
                    {navLinks.map((link, index) => (
                        <a key={index} className='navText text-[#de4c28] transition-all duration-700 hover:text-7xl hover:bg-[#de4c28] hover:text-gray-100 px-3 py-2 rounded-[10px] text-6xl lg:text-4xl lg:hover:text-[2.5rem] font-medium flex justify-end' href={link.link}>{link.title}</a>
                    ))}
                </div>
            </div>
            {/* hamburger menu */}
            {/* <div className='-m-2 flex flex-col md:hidden'>
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center m-3 rounded-md text-gray-300 text-4xl hover:text-white hover:bg-gray-600 ring-2 ring-offset-2 ring-offset-gray-800 ring-white transition-all duration-300'>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div> */}

        </header>
        /* {open ? (
            <div className='md:hidden h-screen flex flex-col'>
                <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                    {navLinks.map((link, index) => (
                        <a key={index} className='text-gray-300 transition-all duration-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium text-center' href={link.link}>{link.title}</a>
                    ))}
                </div>
            </div>
        ) : null}
    </div> */
    )
}

export default Navbar