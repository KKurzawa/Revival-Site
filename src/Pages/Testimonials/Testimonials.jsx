import axios from "axios";
import { useState, useEffect } from "react";
// const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";
const apiBaseUrl = "http://localhost:3001";
function Testimonials() {
    const [input, setInput] = useState({
        username: '',
        comment: '',
    })

    const [comments, setComments] = useState([{
        username: '',
        comment: ''
    }])

    function validateComment() {
        if (!input.username || !input.comment) {
            alert('You must enter your name and comment to submit.')
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

    // function handleClick(e) {
    //     e.preventDefault();
    //     const newComment = {
    //         username: input.username,
    //         comment: input.comment
    //     }
    //     axios.post(`${apiBaseUrl}/create`, newComment)
    // }

    function handleSubmit(e) {
        console.log('submitted');
        validateComment();
        // e.preventDefault();
        const newComment = {
            username: input.username,
            comment: input.comment
        }

        if (input.username && input.comment) {
            alert(`Thank you ${input.username} for your comment!`);
            axios.post(`${apiBaseUrl}/create`, newComment);
        }
    };

    return (
        <main>
            <div className="form-container">
                <h1>Create Comment</h1>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input onChange={handleChange} name="username" value={input.username} autoComplete="off" className="form-control" placeholder="Your Name">

                        </input>
                    </div>
                    <div className="form-group">
                        <textarea onChange={handleChange} name="comment" value={input.comment} autoComplete="off" className="form-control" placeholder="Your Comment">

                        </textarea>
                    </div>
                    <button className="btn-info">Add Comment</button>
                </form>
            </div>
            <div className="comments-container">
                <h1>Comments</h1>
                {comments.map(item =>
                    <div>
                        <h1 key={item.username}>{item.username}</h1>
                        <h2 key={item.comment}>{item.comment}</h2>
                    </div>)}
            </div>
        </main>

    )
}

export default Testimonials