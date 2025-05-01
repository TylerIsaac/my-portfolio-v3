import React from 'react'
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
    { name: "About", href: "#about" },
    { name: "My Skills", href: "#skills" },
    { name: "My Recent Work", href: "#projects" },
    { name: "Get In Touch", href: "#contact" },
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50 font-nunito scroll-smooth">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between relative">
                {/* Brand on the left */}
                <div className="z-50">
                    <a href="#">
                        <img
                            src="https://i.ibb.co/wNV4ZPpL/tyler-dev-logo-update.png"
                            alt="Tyler Dev Logo"
                            className="h-8 w-auto transition duration-300 ease-in-out hover:brightness-75"
                        />
                    </a>
                </div>


                {/* Center nav links on large screens */}
                <div className="hidden lg:flex mx-auto space-x-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-700 hover:text-green-600 transition duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Hamburger menu on mobile */}
                <div className="lg:hidden z-50">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 focus:outline-none relative z-50"
                    >
                        <FontAwesomeIcon
                            icon={isOpen ? faXmark : faBars}
                            size="lg"
                            className="text-gray-700 hover:text-green-600 transition duration-300 ease-in-out cursor-pointer"
                        />
                    </button>
                </div>
            </div>

            {/* Fullscreen mobile menu with blur & fade in */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-full backdrop-blur-[2px] bg-black/15 z-40 transition-opacity duration-300 ease-in-out ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 hover:text-green-600 transition duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navbar