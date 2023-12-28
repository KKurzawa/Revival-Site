import ShowsPic from '../../assets/Photos/ShowsPic.jpeg';
import { ShowList } from '../../Utils/ShowList.jsx';
import './Shows.css';

function Shows() {
    function handleClick() {
        alert("Either tickets are not yet available for purchase or they will be made available at the door.  Please check back later or contact the venue.")
    }

    return (
        <main className=''>
            <img src={ShowsPic}></img>
            <h2 className='text-center text-5xl py-5'>Shows</h2>
            {/* small */}
            <div className='text-2xl'>
                {ShowList.map((show) => (
                    <section key={show.date} className='flex flex-col md:hidden justify-center items-center'>
                        <div className='date-time flex flex-row justify-center'>
                            <div className='sm-date pr-1'>{show.date}</div>
                            <span className='pr-1'>@</span>
                            <div className='sm-time'>{show.time}</div>
                        </div>
                        <div className='sm-venue pb-1'>
                            <a href={show.venueLink} target="_blank" rel="noreferrer" className='hover:text-gray-600'>{show.venue}</a>
                        </div>
                        <div className='sm-tickets pb-5'>
                            {show.ticketLink === false ? (
                                <button onClick={handleClick} className='bg-black text-white p-[.15em] rounded-md hover:text-gray-300 hover:bg-gray-800'>Tickets</button>
                            ) : (
                                <a href={show.ticketLink} target="_blank" rel="noreferrer" className='bg-black text-white p-[.2em] rounded-md hover:text-gray-300 hover:bg-gray-800'>Tickets</a>
                            )}
                        </div>
                    </section>
                ))}
            </div>
            {/* medium/large */}
            <div className='text-lg lg:text-2xl'>
                {ShowList.map((show) => (
                    <section className='section hidden md:grid pl-10'>
                        <div className='date pb-5'>{show.date}</div>
                        <div className='time pb-5'>{show.time}</div>
                        <div className='venue pb-5'>
                            <a href={show.venueLink} target="_blank" rel="noreferrer" className='hover:text-gray-600'>{show.venue}</a>
                        </div>
                        <div className='tickets pb-5 grid justify-end pr-10'>
                            {show.ticketLink === false ? (
                                <button onClick={handleClick} className='bg-black text-white p-[.15em] rounded-md hover:text-gray-300 hover:bg-gray-800'>Tickets</button>
                            ) : (
                                <a href={show.ticketLink} target="_blank" rel="noreferrer" className='bg-black text-white p-[.15em] rounded-md hover:text-gray-300 hover:bg-gray-800'>Tickets</a>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </main >
    )
}

export default Shows