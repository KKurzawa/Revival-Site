import React from 'react';
// import HomePhoto from '../../assets/Photos/HomePhoto.jpeg';
import Testimonials from '../../assets/Photos/Testimonials.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Home() {
    return (
        <div className='bg-[#130253]'>
            <main className='flex lg:hidden flex-col justify-center text-8xl text-white'>
                <LazyLoadImage src={Testimonials} alt='RevivalPic2' className='' />
                <h2 className='flex justify-center mt-40 pt-1 pb-1'>The Ultimate</h2>
                <h2 className='flex justify-center pt-1 pb-1'>Allman Brothers</h2>
                <h2 className='flex justify-center pt-1 pb-1'>Experience </h2>
                <h3 className='flex justify-center mt-40 pt-1 pb-1'>Featuring</h3>
                <h3 className='flex justify-center pt-1 pb-1'>Detroit's</h3>
                <h3 className='flex justify-center pt-1 pb-1'>A-List </h3>
                <h3 className='flex justify-center mb-40 pt-1 pb-1'>Musicians</h3>
            </main>
            <main className='hidden lg:flex flex-col justify-center text-7xl text-white'>
                <LazyLoadImage src={Testimonials} alt='RevivalPic2' className='border-b-2 border-[#c94c2c]' />
                <h2 className='flex justify-center pt-7 pb-1'>The Ultimate Allman Brothers Experience</h2>
                <h3 className='flex justify-center pb-7'>Featuring Detroit's A-List Musicians</h3>
            </main>
        </div>
    )
}

export default Home