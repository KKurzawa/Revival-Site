import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { validateEmail } from '../../Utils/Helpers.js';
import ContactPic from '../../assets/Photos/Contact.jpeg';
import './Contact.css';
import { LazyLoadImage } from "react-lazy-load-image-component";

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please Enter A Valid Email');
            return;
        }

        const serviceId = 'service_7z3rq0t';
        const templateId = 'template_cq7z9hc';
        const publicKey = 'B2PCc5s-Jybuu2Tck';

        const templateParams = {
            from_name: name,
            subject: subject,
            message: message,
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                alert(`Thank you for your email ${name}!  We will get back to you soon!`);
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setErrorMessage('');
            })
            .catch((error) => {
                console.error('Error:', error)
            })
        console.log(templateParams);
    }
    return (
        <main className='flex flex-col items-center pb-10 min-h-64 bg-[#130253]'>
            <LazyLoadImage id='ContactPic' className='contactContainer border-b-[17px] border-[#c94c2c]' src={ContactPic} />
            <h2 className="contactHeader text-[#de4c28] text-8xl pt-10">Contact Us</h2>
            <form onSubmit={handleSubmit} className='emailForm flex flex-col content-center m-[20px] w-[50%]'>
                <input
                    autoComplete="off"
                    className='input outline-none min-h-16 text-5xl'
                    type='text'
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    autoComplete="off"
                    className='input outline-none min-h-16 text-5xl'
                    type='email'
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    autoComplete="off"
                    className='input outline-none min-h-16 text-5xl'
                    type='subject'
                    placeholder='Subject'
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                <textarea
                    autoComplete="off"
                    className='input outline-none text-5xl pt-3'
                    cols='30'
                    rows='5'
                    placeholder='Message'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
                <button className='submit-button text-5xl outline-none border-2 border-[rgba(245,245,245,0.79)] hover:text-[#de4c28] hover:bg-[#f5f5f5] ease-in-out duration-700 hover:text-[3.25rem]  hover:border-2 hover:border-[#de4c28]' type='submit'>Submit</button>
            </form>
            {errorMessage && (
                <article>
                    <p className="error-text text-[#f5f5f5] text-4xl lg:text-5xl mb-5">{errorMessage}</p>
                </article>
            )}
        </main>
    )
}

export default Contact;