import ShowsPic from '../../assets/Photos/ShowsPic.jpeg';
import { ShowList } from '../../Utils/ShowList.jsx';
import { LazyLoadImage } from "react-lazy-load-image-component";
import './Shows.css';

function Shows() {
    function handleClick() {
        alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
    }

    return (
        <main className='text-white bg-[#130253]'>
            <LazyLoadImage src={ShowsPic} alt='RevivalPic2' className='border-b-8 border-[#c94c2c]' />
            <h2 className='text-center text-8xl py-5'>Shows</h2>
            {/* small */}
            <div className='text-6xl'>
                {ShowList.map((show) => (
                    <section key={show.date} className='flex flex-col lg:hidden justify-center items-center'>
                        <div className='date-time flex flex-row justify-center'>
                            <div key={show.date} className='sm-date pr-1'>{show.date}</div>
                            <span className='pr-1'>@</span>
                            <div key={show.id} className='sm-time'>{show.time}</div>
                        </div>
                        <div className='sm-venue pb-5'>
                            <a href={show.venueLink} target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] transition-all duration-500'>{show.venue}</a>
                        </div>
                        <div className='sm-tickets pb-20'>
                            {show.ticketLink === false ? (
                                <button onClick={handleClick} className='bg-white text-[#130253] p-[.15em] rounded-md hover:text-white hover:bg-[#c94c2c] transition-all duration-300'>Tickets</button>
                            ) : (
                                <a href={show.ticketLink} target="_blank" rel="noreferrer" ><button className='bg-white text-[#130253] p-[.15em] rounded-md hover:text-white hover:bg-[#c94c2c] transition-all duration-300'>Tickets</button></a>

                            )}
                        </div>
                    </section>
                ))}
            </div>
            {/* medium/large */}
            <div className='text-4xl'>
                {ShowList.map((show) => (
                    <section className='section hidden lg:grid pl-5'>
                        <div key={show.date} className='date pb-5'>{show.date}</div>
                        <div key={show.id} className='time pb-5 pl-5'>{show.time}</div>
                        <div className='venue pb-5'>
                            <a href={show.venueLink} target="_blank" rel="noreferrer" className='hover:text-[#ffffffb7] transition-all duration-500'>{show.venue}</a>
                        </div>
                        <div className='tickets pb-5 grid justify-end pr-5'>
                            {show.ticketLink === false ? (
                                <button onClick={handleClick} className='bg-white text-[#130253] p-[.15em] rounded-md hover:text-white hover:bg-[#c94c2c] transition-all duration-300'>Tickets</button>
                            ) : (
                                <a href={show.ticketLink} target="_blank" rel="noreferrer" className='bg-white text-[#130253] p-[.15em] rounded-md hover:text-white hover:bg-[#c94c2c] transition-all duration-300'>Tickets</a>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </main >
    )
}

export default Shows