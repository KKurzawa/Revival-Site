import React from 'react';
import HomePhoto from '../../assets/Photos/HomePhoto.jpeg';

function Home() {
    return (
        <main className='flex flex-col justify-center'>
            <img src={HomePhoto}></img>
            <h2 className='flex justify-center'>The Ultimate Allman Brothers Experience </h2>
            <h3 className='flex justify-center'>Featuring Detroit's A-List Musicians</h3>
        </main>
    )
}

export default Home