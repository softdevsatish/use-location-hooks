import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Contact() {
    return (
        <div>
            <p>Contact Us Page</p>
            <Link to="company">Company</Link><br />
            <Link to="channel">Channel</Link><br />
            <Link to="other">Other</Link><br />
            <Outlet />
        </div>
    )
}

export default Contact