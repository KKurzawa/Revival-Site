import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <div className='flex justify-evenly text-white text-5xl bg-black'>
            <a href=''><FaFacebook /></a>
            <a href=''><FaInstagramSquare /></a>
            <a href=''><IoLogoYoutube /></a>
        </div>
    )
}

export default Footer