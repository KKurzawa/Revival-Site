import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logos/logo.png';
import './Navbar.css';


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
    const currentPage = useLocation().pathname;

    return (
        <header className='mainContainer flex flex-col lg:flex-row items-center justify-center bg-[#130253] w-full h-80 border-b-[17px] border-[#c94c2c]'>
            <nav className='lg:w-full'>
                <Link
                    to='/'
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    <img src={Logo} alt='RevivalLogo' className='logo bg-[#de4c28] w-full mt-10 lg:mt-0 lg:ml-6 ease-in-out duration-[1s] rounded-[10px]'></img>
                </Link>
            </nav>
            <nav className='w-full pt-5 lg:ml-6 pb-5'>
                <article className='flex justify-evenly'>
                    {navLinks.map((link, index) => (
                        <Link
                            key={link.link}
                            to={link.link}
                            className={currentPage === link.link ? 'nav-link active' : 'nav-link'}
                        >
                            <nav key={index} className='navText text-[#de4c28] tracking-wide ease-in-out duration-[1s] hover:text-[3.85rem] hover:bg-[#de4c28] hover:text-[#f5f5f5] px-2 py-2 rounded-[10px] text-6xl lg:text-4xl lg:hover:text-[2.5rem] font-medium flex justify-end'>{link.title}</nav>
                        </Link>
                    ))}
                </article>
            </nav>
        </header>
    )
}

export default Navbar