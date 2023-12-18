import React from 'react'
import "./Footer.css"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className='footer-container'>
            <ul className='footer-list'>
                <li><h2>ABOUT</h2></li>
                <li><p>Contact us</p></li>
                <li><p>About us</p></li>
                <li><p>Careers</p></li>
                <li><p>Gift Cards</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>HELP</h2></li>
                <li><p>Payments</p></li>
                <li><p>Shipping</p></li>
                <li><p>Cancellation & Returns</p></li>
                <li><p>FAQs</p></li>
            </ul>
            <ul className='footer-list'>
                <li><h2>SOCIALS</h2></li>
                <li>
                    <a href="https://www.linkedin.com/in/utkarsh-vaish-6bab76209/" rel="noreferrer" target="_blank">
                        <p>Linkedin</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/Utkarshvaish12" rel="noreferrer" target="_blank">
                        <p>Github</p>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com" rel="noreferrer" target="_blank">
                        <p>Twitter</p>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com" rel="noreferrer" target="_blank">
                        <p>Instagram</p>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export { Footer } 