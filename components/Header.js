'use client'
import Image from 'next/image';
import { Phone, Mail, Instagram, Facebook, Twitter, Menu, X } from 'lucide-react';
import {useState} from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-white text-gray-800">
            <div className="bg-green-500 text-white py-2">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center text-sm"><Phone size={14} className="mr-1" /> +33 6 72 35 84 65</span>
                        <span className="flex items-center text-sm hidden sm:flex"><Mail size={14} className="mr-1" /> contact@lsdit.org</span>
                    </div>
                    <div className="flex space-x-4">
                        <Instagram size={14} className="cursor-pointer" />
                        <Facebook size={14} className="cursor-pointer" />
                        <Twitter size={14} className="cursor-pointer" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto flex justify-between items-center py-4 px-4">
                <a
                    href="/"
                    className="flex items-center space-x-2">
                    <Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                    <span className="text-xl font-bold text-gray-800">Let’s Do It Together</span>
                </a>
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:text-green-500">Home</a></li>
                        <li><a href="/#about" className="hover:text-green-500">A propos</a></li>

                        <li><a href="/#event" className="hover:text-green-500">
                            Nos Actions
                        </a></li>
                        <li><a href="/#contact" className="hover:text-green-500">Contact</a></li>
                    </ul>
                </nav>
                <button className="hidden md:block bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition duration-300">DONATE</button>
                <button onClick={toggleMenu} className="md:hidden">
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="container mx-auto py-4 px-4">
                        <ul className="space-y-2">
                            <li><a href="/" className="block py-2 hover:text-green-500">Home</a></li>
                            <li><a href="/#about" className="block py-2 hover:text-green-500">
                                A propos
                            </a></li>
                            <li><a href="/#event" className="block py-2 hover:text-green-500">
                                Nos Actions
                            </a></li>
                            <li><a href="/#contact" className="block py-2 hover:text-green-500">Contact</a></li>
                        </ul>
                        <button className="mt-4 w-full bg-pink-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-pink-600 transition duration-300">DONATE</button>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;