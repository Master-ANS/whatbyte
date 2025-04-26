import React from 'react'

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-7 shadow-sm bg-white">
            {/* Company Logo */}
            <div className="flex items-center text-3xl font-bold text-gray-800">
                <div className="bg-white p-1 rounded-md">
                    <img
                        src="logo2.png"
                        alt="Company Logo"
                        className="w-10 h-10 object-contain"
                    />
                </div>
                <span className="ml-2">WhatBytes</span>
            </div>

            {/* Profile Box */}
            <div className="flex items-center bg-white px-4 py-1 rounded-md shadow-md">
                <img
                    src="profilepic.png"
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover mr-2"
                />
                <span className="text-gray-800 font-bold text-sm">Ayush Navneet Singh</span>
            </div>
        </nav>

    )
}

export default Navbar