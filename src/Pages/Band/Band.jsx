import './Band.css';
import { BandMembers } from '../../Utils/BandMembers';
import { LazyLoadImage } from "react-lazy-load-image-component";

function Band() {
    return (
        <div className='bg-[#130253]'>
            {/* small */}
            <main className='flex flex-col justify-center pb-5 lg:hidden text-white'>
                <h2 className='bandHeader text-center text-8xl pt-4 pb-4 text-[#de4c28]'>Band</h2>
                <section className='flex flex-col'>
                    {BandMembers.map((member) => (
                        <div className='flex flex-col items-center'>
                            <div key={member.name} className='whiteText text-5xl pb-1'>{member.name}</div>
                            <LazyLoadImage key={member.pic} src={member.pic} alt={member.name} className='w-[75%] rounded-xl pb-1' />
                            <div key={member.description} className='whiteText text-4xl text-center w-[75%] italic pb-1'>{member.description}</div>
                            <div key={member.id} className='icons flex flex-row w-[50%] justify-center text-4xl pb-5'>
                                {member.facebookIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.facebookLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-gray-600'>{member.facebookIcon}</a>
                                )}
                                {member.instagramIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.instagramLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-gray-600'>{member.instagramIcon}</a>
                                )}
                                {member.websiteIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.websiteLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-gray-600'>{member.websiteIcon}</a>
                                )}
                                {member.appleMusicIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.appleMusicLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-gray-600'>{member.appleMusicIcon}</a>
                                )}
                                {member.spotifyIcon === false ? (
                                    <div></div>
                                ) : (
                                    <a href={member.spotifyLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-gray-600'>{member.spotifyIcon}</a>
                                )}
                            </div>
                        </div>
                    ))}
                </section>
            </main>
            {/* medium and large */}
            <h2 className='bandHeader text-[#de4c28] text-center hidden lg:block text-6xl pt-3 pb-2'>Band</h2>
            <main className='hidden lg:flex text-white'>
                <section className='justify-center pb-5'>
                    <section className='flex flex-col'>
                        {BandMembers.map((member, index) => index % 2 === 0 && (
                            <div className='flex flex-col items-center'>
                                <div key={member.name} className='whiteText text-3xl pb-1'>{member.name}</div>
                                <LazyLoadImage key={member.pic} src={member.pic} alt={member.name} className='w-[75%] h-auto rounded-xl pb-1' />
                                <div key={member.description} className='whiteText text-lg text-center w-[75%] italic pb-1'>{member.description}</div>
                                <div key={member.id} className='icons flex flex-row w-[50%] justify-center text-2xl pb-3'>
                                    {member.facebookIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.facebookLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.facebookIcon}</a>
                                    )}
                                    {member.instagramIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.instagramLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.instagramIcon}</a>
                                    )}
                                    {member.websiteIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.websiteLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.websiteIcon}</a>
                                    )}
                                    {member.appleMusicIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.appleMusicLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.appleMusicIcon}</a>
                                    )}
                                    {member.spotifyIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.spotifyLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.spotifyIcon}</a>
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
                                <div key={member.id} className='icons flex flex-row w-[50%] justify-center text-2xl pb-3'>
                                    {member.facebookIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.facebookLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.facebookIcon}</a>
                                    )}
                                    {member.instagramIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.instagramLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.instagramIcon}</a>
                                    )}
                                    {member.websiteIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.websiteLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.websiteIcon}</a>
                                    )}
                                    {member.appleMusicIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.appleMusicLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.appleMusicIcon}</a>
                                    )}
                                    {member.spotifyIcon === false ? (
                                        <div></div>
                                    ) : (
                                        <a href={member.spotifyLink} target="_blank" rel="noreferrer" className='px-1 transition-all duration-500 hover:text-[#ffffffb1]'>{member.spotifyIcon}</a>
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