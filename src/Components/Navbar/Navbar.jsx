import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import Logo from '../../assets/Logos/logo.png';

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
        <header className='flex flex-col lg:flex-row items-center  bg-black w-full'>
            <div className=''>
                <a href='/' className='flex justify-center'>
                    <img src={Logo} alt='RevivalLogo' className='justify-center w-[100%] '></img></a>
            </div>
            <div className=''>
                <div className='flex justify-end items-center lg:ml-48'>
                    {navLinks.map((link, index) => (
                        <a key={index} className='text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-3xl lg:text-4xl font-medium flex justify-end' href={link.link}>{link.title}</a>
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