import './Band.css';
import { BandMembers } from '../../Utils/BandMembers';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Band() {
    return (
        <div className='bandContainer bg-[#130253] py-10'>
            {/* small */}
            <main className='flex flex-col justify-center pb-5 lg:hidden text-[#f5f5f5]'>
                <h2 className='bandHeader text-center text-8xl pb-10 text-[#de4c28]'>Band</h2>
                <section className='flex flex-col'>
                    {BandMembers.map((member) => (
                        <div className='flex flex-col items-center'>
                            <div key={member.name} className='whiteText text-6xl pb-3'>{member.name}</div>
                            <LazyLoadImage key={member.pic} src={member.pic} alt={member.name} className='w-[75%] rounded-xl pb-2' />
                            <div key={member.description} className='whiteText text-4xl text-center w-[75%] italic pb-2'>{member.description}</div>
                            <div key={member.id} className='icons flex flex-row w-[50%] justify-center text-5xl  pb-10'>
                                {member.facebookIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.facebookLink} target="_blank" rel="noreferrer" className='px-3 pt-1  transition-all duration-500 hover:text-gray-600 hover:text-6xl'>{member.facebookIcon}</a>
                                )}
                                {member.instagramIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.instagramLink} target="_blank" rel="noreferrer" className='px-3 pt-1  transition-all duration-500 hover:text-gray-400 hover:text-6xl'>{member.instagramIcon}</a>
                                )}
                                {member.websiteIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.websiteLink} target="_blank" rel="noreferrer" className='px-3 pt-1  transition-all duration-500 hover:text-gray-400 hover:text-6xl'>{member.websiteIcon}</a>
                                )}
                                {member.appleMusicIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.appleMusicLink} target="_blank" rel="noreferrer" className='px-3 pt-1  transition-all duration-500 hover:text-gray-400 hover:text-6xl'>{member.appleMusicIcon}</a>
                                )}
                                {member.spotifyIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.spotifyLink} target="_blank" rel="noreferrer" className='px-3 pt-1  transition-all duration-500 hover:text-gray-400 hover:text-6xl'>{member.spotifyIcon}</a>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            {/* medium and large */}
            <h2 className='bandHeader text-[#de4c28] text-center hidden lg:block text-8xl pb-10'>Band</h2>
            <main className='hidden lg:flex text-[#f5f5f5]'>
                <section className='justify-center pb-5'>
                    <section className='flex flex-col'>
                        {BandMembers.map((member, index) => index % 2 === 0 && (
                            <div className='flex flex-col items-center'>
                                <div key={member.name} className='whiteText text-3xl pb-1'>{member.name}</div>
                                <LazyLoadImage key={member.pic} src={member.pic} alt={member.name} className='w-[75%] h-auto rounded-xl pb-1' />
                                <div key={member.description} className='whiteText text-lg text-center w-[75%] italic pb-1'>{member.description}</div>
                                <div key={member.id} className='icons flex flex-row w-[50%] justify-center text-2xl pb-10'>
                                    {member.facebookIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.facebookLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.facebookIcon}</a>
                                    )}
                                    {member.instagramIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.instagramLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.instagramIcon}</a>
                                    )}
                                    {member.websiteIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.websiteLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.websiteIcon}</a>
                                    )}
                                    {member.appleMusicIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.appleMusicLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.appleMusicIcon}</a>
                                    )}
                                    {member.spotifyIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.spotifyLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.spotifyIcon}</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
                <section className='justify-center pb-5'>
                    <section className='flex flex-col'>
                        {BandMembers.map((member, index) => index % 2 !== 0 && (
                            <div className='flex flex-col items-center'>
                                <div key={member.name} className='whiteText text-3xl pb-1'>{member.name}</div>
                                < LazyLoadImage key={member.pic} src={member.pic} alt={member.name} className='w-[75%] h-auto rounded-xl pb-1' />
                                <div key={member.description} className='whiteText text-lg text-center w-[75%] italic pb-1'>{member.description}</div>
                                <div key={member.id} className='icons flex flex-row w-[50%] justify-center text-2xl pb-10'>
                                    {member.facebookIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.facebookLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.facebookIcon}</a>
                                    )}
                                    {member.instagramIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.instagramLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.instagramIcon}</a>
                                    )}
                                    {member.websiteIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.websiteLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.websiteIcon}</a>
                                    )}
                                    {member.appleMusicIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.appleMusicLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.appleMusicIcon}</a>
                                    )}
                                    {member.spotifyIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.spotifyLink} target="_blank" rel="noreferrer" className='px-1 ease-in-out duration-500 hover:text-[#ffffffb1] hover:text-3xl'>{member.spotifyIcon}</a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </section>
                </section>
            </main>
        </div>
    )
}

export default Band