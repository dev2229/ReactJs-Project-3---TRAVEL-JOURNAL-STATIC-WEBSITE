import React from "react";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
    <footer className="footer">
        <div className="social-icons">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook />
        </a>
        </div>
        <p>&copy; 2023 DEVANSH JADHAV.</p>
    </footer>
);
}