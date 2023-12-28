import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <div className='flex justify-evenly items-center text-white text-5xl bg-black h-20'>
            <a href='https://www.facebook.com/revivalmusicdetroit/' target="_blank" rel="noreferrer" className='hover:text-gray-300'><FaFacebook /></a>
            <a href='https://www.instagram.com/thelucasband/' target="_blank" rel="noreferrer" className='hover:text-gray-300'><FaInstagramSquare /></a>
            <a href='https://www.youtube.com/channel/UCY_f-YAq6RE4hX6qqCcM_3w' target="_blank" rel="noreferrer" className='hover:text-gray-300'><IoLogoYoutube /></a>
        </div>
    )
}

export default Footer