"use client"
import React, { useState } from 'react';
import { BsList, BsX } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar: React.FC = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setShowMobileMenu(!showMobileMenu);
    };
    const closeMobileMenu = () => {
        setShowMobileMenu(false);
    };

    return (
        <nav className="flex fixed z-10 md:pb-1 flex-row md:flex-row w-full bg-[#cee3db] justify-between">
            <div className="flex px-2 mt-2">
                <Image src="/logo.svg" width={100} height={100} className="h-12 md:h-14 w-auto" alt="Logo" />
                <p className="font-Sarmandy tracking-wide text-black ml-2 font-semibold text-lg md:text-xl 
                md:w-auto md:ml-5 md:mt-0 ">
                    ITB Civil Engineering Expo
                    <br />
                    2024
                </p>
            </div>

            {/* Desktop */}
            <div className="hidden sm:flex px-2 mt-2 md:mt-6 md:mr-10 font-Sarmandy 
            text-black font-semibold text-lg md:text-xl">
                <Link href="#home" className="text-black hover:underline">
                    HOME
                </Link>
                <span className="text-black mx-2">|</span>
                <Link href="/register" className="text-black hover:underline">
                    REGISTER
                </Link>
            </div>

            {/* Mobile */}
            <div className="sm:hidden mr-2 flex items-center">
                <BsList onClick={toggleMobileMenu} className="h-11 w-11 text-black" />
            </div>

            <div className={`fixed top-0 right-0 w-full sm:hidden h-screen bg-[#cee3db] 
            p-10 transition-transform ${showMobileMenu ?
                    'ease-in-out duration-500 transform translate-y-0 opacity-100' :
                    'ease-in-out duration-500 transform -translate-y-full opacity-0'
                }`}>
                <div className="flex w-full items-center justify-end">
                    <div className="cursor-pointer">
                        <BsX onClick={toggleMobileMenu} className="h-12 w-12 text-black" />
                    </div>
                </div>
                {/* Mobile Links */}
                <div className="flex flex-col justify-center items-center h-[80%]">
                    <ul className="flex flex-col items-center gap-16">
                        <li>
                            <Link href="#home" onClick={closeMobileMenu} className="text-black font-Sarmandy
                             text-3xl">
                                HOME
                            </Link>
                        </li>
                        <li>
                            <Link href="#register" onClick={closeMobileMenu} className="text-black font-Sarmandy
                        text-3xl">
                                REGISTER
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
