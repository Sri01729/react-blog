import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="notFound">
            <h1> Sorry, the page you are looking is not found ;(</h1>
            <Link to="/">Click this to go to homepage</Link>
        </div>
    );
}

export default NotFound;