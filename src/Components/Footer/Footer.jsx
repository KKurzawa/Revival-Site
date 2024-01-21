import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <footer className=' bg-[#fe4701] h-80 flex flex-col justify-end border-t-8 border-white'>
            <div className='flex justify-evenly items-center text-white text-9xl'>
                <a href='https://www.facebook.com/revivalmusicdetroit/' target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] transition-all duration-300'><FaFacebook /></a>
                <a href='https://www.instagram.com/thelucasband/' target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] transition-all duration-300'><FaInstagramSquare /></a>
                <a href='https://www.youtube.com/channel/UCY_f-YAq6RE4hX6qqCcM_3w' target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] transition-all duration-300'><IoLogoYoutube /></a>
            </div>
            <a href='https://immense-everglades-74554-f9bad473782a.herokuapp.com/' target="_blank" rel="noreferrer">
                <p className='flex justify-end text-white hover:text-[#ffffffb7] transition-all duration-300 mt-10 mb-2 mr-2 text-2xl'>Site Designed and Built by Kris Kurzawa</p>
            </a>
        </footer>

    )
}

export default Footer