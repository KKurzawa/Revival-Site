import axios from "axios";
import { useState, useEffect } from "react";
import TestimonialsPic from "../../assets/Photos/Testimonials.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import './Testimonials.css'

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";

function Testimonials() {
    const [input, setInput] = useState({
        userfirstname: '',
        userlastname: '',
        comment: '',
    })

    const [comments, setComments] = useState([{
        userfirstname: '',
        userlastname: '',
        comment: ''
    }])

    function validateComment() {
        if (!input.userfirstname || !input.userlastname || !input.comment) {
            alert('You must enter your first name, last name, and experience to submit.')
        }
    }

    useEffect(() => {
        fetch(`${apiBaseUrl}/comments`).then(res => {
            if (res.ok) {
                return res.json()
            }
        }).then(jsonRes => setComments(jsonRes))

    }, [])

    function handleChange(e) {
        const { name, value } = e.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log('submitted');
        validateComment();
        const newComment = {
            userfirstname: input.userfirstname,
            userlastname: input.userlastname,
            comment: input.comment
        }
        if (input.userfirstname && input.userlastname && input.comment) {
            alert(`Thank you ${input.userfirstname} ${input.userlastname} for your comment!`);
            axios.post(`${apiBaseUrl}/create`, newComment).then(result => {
                location.reload()
            }).catch(error => {
                console.error(error);
            });
        }
    };

    return (
        <main className="flex flex-col items-center md:mb-0 min-h-screen">
            <LazyLoadImage id='TestimonialsPic' src={TestimonialsPic} />
            <h1 className="text-center text-black text-7xl mt-5">Post About Your Experience <br></br>With Revival</h1>
            <form onSubmit={handleSubmit} className="flex flex-col content-center m-[20px] w-[50%]">
                <input onChange={handleChange}
                    name="userfirstname" value={input.userfirstname}
                    autoComplete="off"
                    className="form-group outline-none min-h-16 text-5xl"
                    placeholder="Your First Name"
                    type="comment"
                >
                </input>
                <input onChange={handleChange}
                    name="userlastname" value={input.userlastname}
                    autoComplete="off"
                    className="form-group outline-none min-h-16 text-5xl"
                    placeholder="Your Last Name"
                    type="comment"
                >
                </input>
                <textarea
                    onChange={handleChange}
                    name="comment"
                    value={input.comment}
                    autoComplete="off"
                    type="comment"
                    className="form-group outline-none text-5xl"
                    placeholder="Your Experience"
                    cols='30'
                    rows='5'
                >
                </textarea>
                <button className="post-button text-4xl hover:text-gray-300 hover:bg-gray-800 transition-all duration-300">Add Post</button>
            </form>
            <div className="comments-container">
                <h1 className="text-center text-black text-3xl md:text-6xl -mb-4">Fan Experiences</h1>
                {comments.map(item =>
                    <div className="mx-10 md:mx-14 lg:mx-20 my-6 md:my-8">
                        <h2 key={item.comment} className="text-center text-2xl md:text-5xl pb-2">{item.comment}</h2>
                        <h2 key={item.userfirstname} className="text-end text-lg md:text-3xl">- {item.userfirstname}&nbsp;{item.userlastname}</h2>
                    </div>)}
            </div>
        </main>
    )
}

export default Testimonials