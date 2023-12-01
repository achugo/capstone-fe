import Image from 'next/image';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 h-48 flex items-end pb-8 gap-8">
            <div
                className="mt-2 flex hover:cursor-pointer"
            >
                <Image
                    className="cursor-pointer w-8 h-8 sm:h-12 sm:w-12"
                    src={"/logo-icon.png"}
                    alt="Glocery guru"
                    width={50}
                    height={100}
                />
                <span className="text-center font-semibold text-sm sm:text-2xl text-white pt-1">
                    <span className="text-primary">GROCERY</span>GURU
                </span>
            </div>
            <div className="container mx-auto flex justify-between items-center">
                <p>© 2023</p>
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
        </footer >
    );
};

export default Footer;
