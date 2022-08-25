import { useLocation } from 'react-router-dom';
import React from 'react'

function About() {
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <p>About Page</p>
        </div>
    )
}

export default About