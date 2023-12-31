import React from 'react';
import HomePhoto from '../../assets/Photos/HomePhoto.jpeg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

function Home() {
    return (
        <main className='flex flex-col justify-center text-xl md:text-4xl lg:text-5xl'>
            <LazyLoadImage src={HomePhoto} alt='RevivalPic2' className='' />
            <h2 className='flex justify-center pt-7 pb-1'>The Ultimate Allman Brothers Experience </h2>
            <h3 className='flex justify-center pb-7'>Featuring Detroit's A-List Musicians</h3>
        </main>
    )
}

export default Home