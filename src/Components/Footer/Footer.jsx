import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
    return (
        <footer className=' bg-[#fe4701] h-80 flex flex-col justify-end border-t-8 border-[#f5f5f5]'>
            <div className='flex justify-evenly items-center text-[#f5f5f5] text-9xl'>
                <a href='https://www.facebook.com/revivalmusicdetroit/' target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] ease-in-out duration-[1s] hover:text-[8.25rem]'><FaFacebook /></a>
                <a href='https://www.instagram.com/thelucasband/' target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] ease-in-out duration-[1s] hover:text-[8.25rem]'><FaInstagramSquare /></a>
                <a href='https://www.youtube.com/channel/UCY_f-YAq6RE4hX6qqCcM_3w' target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] ease-in-out duration-[1s] hover:text-[8.25rem]'><IoLogoYoutube /></a>
            </div>
            <a href='https://immense-everglades-74554-f9bad473782a.herokuapp.com/' target="_blank" rel="noreferrer">
                <p className='flex justify-end text-[#f5f5f5] hover:text-[#ffffffb7] hover:text-[1.6rem] ease-in-out duration-[1s] mt-10 mb-2 mr-2 text-2xl'>Site Designed and Built by Kris Kurzawa</p>
            </a>
        </footer>

    )
}

export default Footer