'use client'
import React, { useState } from 'react';
import { LiaRobotSolid } from "react-icons/lia";
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="relative">
            <div className='flex justify-between items-center lg:px-10 lg:py-4 px-4 py-4 fixed top-0 left-0 right-0 z-50 bg-gray-950'>
                <div className="flex gap-3 items-center">
                    <LiaRobotSolid className='text-4xl text-purple-500' />
                    <p className='text-2xl font-bold text-white'>Agentia World</p>
                </div>

                <div className='hidden md:flex gap-9 text-lg font-medium text-gray-200'>
                    <Link href={'#features'}>Features</Link>
                    <Link href={'#technology'}>Technology</Link>
                    <Link href={'#agents'}>Agents</Link>
                    <Link href={'#pricing'}>Pricing</Link>
                    <Link href={'#contact'}>Contact</Link>
                    <button className='bg-gradient-to-r from-purple-600 to-blue-700 text-white px-4 py-2 rounded-md'>Launch Console</button>
                </div>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className="text-white text-xl focus:outline-none">
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className='md:hidden absolute top-full left-0 w-full bg-gray-900 text-white flex flex-col p-4'>
                    <Link href={'#features'} onClick={toggleMenu} className="py-2 text-lg">Features</Link>
                    <Link href={'#technology'} onClick={toggleMenu} className="py-2 text-lg">Technology</Link>
                    <Link href={'#agents'} onClick={toggleMenu} className="py-2 text-lg">Agents</Link>
                    <Link href={'#pricing'} onClick={toggleMenu} className="py-2 text-lg">Pricing</Link>
                    <Link href={'#contact'} onClick={toggleMenu} className="py-2 text-lg">Contact</Link>
                    <button className='bg-gradient-to-r from-purple-600 to-blue-700 text-white px-4 py-2 mt-2 rounded-md'>Launch Console</button>
                </div>
            )}
        </div>
    );
}

export default Navbar;
