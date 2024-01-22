import axios from "axios";
import { useState, useEffect } from "react";
import TestimonialsPic from "../../assets/Photos/Testimonials.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
        <main className="flex flex-col items-center md:mb-0 min-h-screen bg-[#130253]">
            <LazyLoadImage id='TestimonialsPic' src={TestimonialsPic} className='postContainer border-b-[17px] border-[#c94c2c]' />
            <h1 className="postHeader text-[#c94c2c] text-center pt-10 text-7xl">Post About Your Experience <br></br>With Revival</h1>
            <form onSubmit={handleSubmit} className=" text-[#f5f5f5] flex flex-col content-center mt-[20px] w-[50%]">
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
                    className="form-group outline-none text-5xl pt-3"
                    placeholder="Your Experience"
                    cols='30'
                    rows='5'
                >
                </textarea>
                <button className="post-button text-4xl border-[1px] border-[#f5f5f5] hover:text-[#de4c28] hover:bg-[#f5f5f5] ease-in-out duration-700 hover:text-[2.5rem] hover:w-[10.25rem] hover:h-[4.25rem] hover:border-4 hover:border-[#de4c28]">Add Post</button>
            </form>
            <div className="comments-container text-[#f5f5f5] mb-10">
                <h1 className="postHeader text-[#c94c2c] text-center text-7xl pt-5 -mb-4">Fan Experiences</h1>
                {comments.map(item =>
                    <div className="mx-14 lg:mx-20 mt-10 mb-10">
                        <h2 key={item.comment} className="whiteText text-center text-2xl md:text-5xl pb-2">{item.comment}</h2>
                        <h2 key={item.userfirstname} className="whiteText text-end text-lg md:text-3xl italic">- {item.userfirstname}&nbsp;{item.userlastname}</h2>
                    </div>)}
            </div>
        </main>
    )
}

export default Testimonials