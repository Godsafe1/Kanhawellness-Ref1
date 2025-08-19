import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { AiFillAndroid } from "react-icons/ai";
import { FaAngleDown } from "react-icons/fa";

function Navbar() {
    const [toggle, setToggle] = useState(false);

    const updateToggle = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="bg-[#F5F7FA]">
            <div className="container mx-auto max-w-[1320px] relative px-6 py-2 flex flex-col md:flex md:flex-row items-center justify-between h-auto md:h-[80px]">
                {/* Logo */}
                <a href="#" className="text-blue-800 text-2xl font-bold">
                    <img
                        src="/NavbarLOGO_2.png"  
                        alt="Logo"
                        className="h-15 w-auto" 
                    />
                    </a>

                {/* Navigation Links */}
                    <ul className={`flex-col ${toggle ? 'flex' : 'hidden'} md:flex md:flex-row items-center text-gray-700 font-medium`}>
                        <li className="my-2 md:mx-4">
                            <a href="#" className="hover:text-blue-600">Home</a>
                        </li>
                        <li className="my-2 md:mx-4">
                            <a href="#" className="hover:text-blue-600 flex items-center gap-1">Service <FaAngleDown className="text-xs mt-[2px]" /></a>
                        </li>
                        <li className="my-2 md:mx-4">
                            <a href="#" className="hover:text-blue-600 flex items-center gap-1">Feature <FaAngleDown className="text-xs mt-[2px]" /></a>
                        </li>
                        <li className="my-2 md:mx-4">
                            <a href="#" className="hover:text-blue-600 flex items-center gap-1">Product <FaAngleDown className="text-xs mt-[2px]" /></a>
                        </li>
                    </ul>

                {/* Right Side: Search + Contact us */}
                    <div className={`items-center space-x-4 mt-4 md:mt-0 ${toggle ? 'flex' : 'hidden'} md:flex`}>
                        <a href="#" className="text-gray-600 hover:text-blue-600">
                            <FiSearch size={20} />
                        </a>
                        <a
                            href="#"
                            className="inline-flex justify-center items-center py-2 px-4 bg-cyan-700 text-white rounded-md hover:bg-cyan-800 transition"
                        >
                            Contact us
                        </a>
                    </div>

                {/* Hamburger icon (mobile only) */}
                <FaBars 
                    onClick={updateToggle}
                    className="absolute right-5 top-6 cursor-pointer text-xl md:hidden"
                    aria-label="Toggle menu"
                    role="button"
                />
            </div>
        </nav>
    );
}

export default Navbar;