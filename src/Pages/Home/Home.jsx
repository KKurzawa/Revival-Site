import React from 'react';
// import HomePhoto from '../../assets/Photos/HomePhoto.jpeg';
import Testimonials from '../../assets/Photos/Testimonials.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Home.css'

function Home() {
    return (
        <div className='bg-[#130253]'>
            {/* <div className='bg-gradient-to-b from-[#130253] via-[#130253] to-[#c94c2c] lg:to-[#130253]'> */}
            <main className='flex lg:hidden flex-col justify-center text-8xl text-[#c94c2c]'>
                <LazyLoadImage src={Testimonials} alt='RevivalPic2' className='bodyContainer border-b-[17px] border-[#c94c2c]' />
                <h2 className='homeText flex justify-center mt-20 pt-1 pb-1'>The Ultimate</h2>
                <h2 className='homeText flex justify-center pt-1 pb-1'>Allman Brothers</h2>
                <h2 className='homeText flex justify-center pt-1 pb-1'>Experience </h2>
                <h3 className='homeText flex justify-center mt-20 pt-1 pb-1'>Featuring</h3>
                <h3 className='detroit flex justify-center pt-1 pb-1 text-white'>Detroit's</h3>
                <h3 className='homeText flex justify-center pt-1 pb-1'>A-List </h3>
                <h3 className='homeText flex justify-center mb-20 pt-1 pb-1'>Musicians</h3>
            </main>
            <main className='hidden lg:flex flex-col justify-center text-6xl text-[#c94c2c]'>
                <LazyLoadImage src={Testimonials} alt='RevivalPic2' className='bodyContainer border-b-[17px] border-[#c94c2c]' />
                <h2 className='homeText flex justify-center pt-7 pb-1'>The Ultimate Allman Brothers Experience</h2>
                <h3 className='homeText flex justify-center pb-7'>Featuring<span className='detroit text-white'>&nbsp;Detroit's&nbsp;</span> A-List Musicians</h3>
            </main>
        </div>
    )
}

export default Home