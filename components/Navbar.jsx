import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-slate-800 p-4 shadow-md">
            <div className="flex">
                <div className="text-white text-lg font-bold">
                    <p>Resort</p>
                </div>
                <div className="flex ml-8 gap-4">
                    <Link href={`/`} className="text-white hover:text-gray-300">Home</Link>
                    <Link href={`/about`} className="text-white hover:text-gray-300">About</Link>
                    <a href={`/resort/files/test.pdf`} download className="text-white hover:text-gray-300">Download Test</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;