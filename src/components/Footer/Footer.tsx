import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <p>© 2023 Grocery Guru</p>
                <div className="flex gap-4">
                    <a href="https://www.facebook.com" className="hover:text-blue-500">
                        <FaFacebook />
                    </a>
                    <a href="https://www.twitter.com" className="hover:text-blue-300">
                        <FaTwitter />
                    </a>
                    <a href="https://www.instagram.com" className="hover:text-pink-400">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com" className="hover:text-blue-700">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
