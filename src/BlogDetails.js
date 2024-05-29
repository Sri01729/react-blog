import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const { data: blog, message, isPending } = useFetch('http://localhost:8000/blogs/'+id);
    const handleClick = () => {

        fetch('http://localhost:8000/blogs/' + blog.id, {
            method:'DELETE'
        })
            .then(() => {
                navigate('/');
        })
    }
    return (

        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {message && <div>{message}</div>}
            {blog &&
             <div>
                    <h2>{blog.title}</h2>
                    <h3>Written by {blog.author}</h3>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete blog</button>
            </div>}
        </div>
     );
}

export default BlogDetails;