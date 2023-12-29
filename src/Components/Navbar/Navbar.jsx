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
    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
        console.log(open);
    };

    return (
        <div className='bg-black'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-28'>
                    <div className='flex justify-center items-center'>
                        <a href='/' className=''>
                            <img src={Logo} alt='RevivalLogo'></img></a>
                    </div>
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navLinks.map((link, index) => (
                                <a key={index} className='text-gray-300 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-xl lg:text-2xl font-medium' href={link.link}>{link.title}</a>
                            ))}
                        </div>
                    </div>
                    {/* hamburger menu */}
                    <div className='-m-2 flex md:hidden'>
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center m-3 rounded-md text-gray-300 text-4xl hover:text-white hover:bg-gray-600 ring-2 ring-offset-2 ring-offset-gray-800 ring-white transition-all duration-300'>
                            <span className='sr-only'>Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
            {open ? (
                <div className='md:hidden h-screen'>
                    <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        {navLinks.map((link, index) => (
                            <a key={index} className='text-gray-300 transition-all duration-500 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-2xl font-medium text-center' href={link.link}>{link.title}</a>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default Navbar