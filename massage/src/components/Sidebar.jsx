import React, { useState } from 'react';
import Header from './Header';
import Admin from './Admin';
import CommentList from './CommentList';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex" onClick={() => setIsOpen(false)}>
        <div>
            <button
                className="z-10 flex items-center justify-center w-8 h-8 p-1 text-gray-400 transition-colors duration-300 bg-white rounded-full md:hidden top-4 hover:bg-gray-100 "
                onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <aside
                className={` flex flex-row transition-all duration-300 shadow-lg md:relative md:shadow-none max-w-80 ${
                isOpen ? 'translate-x-0 mr-0' : '-translate-x-80 -mr-80 md:translate-x-0 md:mr-0'
                }`}
            >
                <div className="w-16 h-screen">
                <div className="h-screen bg-gray-800">
                    <a href="/" className="flex items-center justify-center w-full h-16 transition-all duration-300 bg-gray-900 hover:bg-opacity-30">
                    <img src="/images/aircontrol-icon.svg" alt="Icon" className="w-5" />
                    </a>
                    <div className="flex flex-col items-center justify-center px-4 pt-6 space-y-6">
                    <button type="button" className="w-10 bg-white rounded-lg">
                        <img src="/images/project-icon8.png" className="w-10 h-10 rounded-md" alt="Icon" />
                    </button>
                    <button type="button" className="w-10 transition-opacity duration-300 bg-white rounded-lg opacity-30 hover:opacity-100">
                        <img src="/images/project-icon2.png" className="w-10 h-10 rounded-md" alt="Icon" />
                    </button>
                    <button type="button" className="w-10 transition-opacity duration-300 bg-white rounded-lg opacity-30 hover:opacity-100">
                        <img src="/images/project-icon1.png" className="w-10 h-10 rounded-md" alt="Icon" />
                    </button>
                    <button type="button" className="flex items-center justify-center w-10 h-10 transition-opacity duration-300 bg-transparent border border-gray-600 rounded-lg text-gray-50 hover:bg-blue-700 hover:opacity-100 ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                        </svg>
                    </button>
                    </div>
                </div>
                </div>
                <div className="w-64 h-full border-r border-gray-200 xl:w-72">
                <div className="w-full h-screen bg-white">
                    <div className="flex items-center h-16 px-4 text-base font-semibold text-gray-800 border-b border-gray-200">
                    Ultra Safer Savvy
                    </div>
                    <div className="pt-6 space-y-8 bg-white">
                    <div>
                        <span className="block px-4 pb-2 text-xs font-semibold tracking-widest text-gray-800 uppercase lg:px-6">
                        Private Channels
                        </span>
                        <div className="pt-2 divide-gray-200">
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span>Morris and James</span>
                            <span className="text-gray-600">89</span>
                        </a>
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span>Morris and Megan</span>
                            <span className="text-gray-600">23</span>
                        </a>
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span>Morris and Austin</span>
                            <span className="text-gray-600">12</span>
                        </a>
                        </div>
                    </div>
                    <div>
                        <span className="block px-4 pb-2 text-xs font-semibold tracking-widest text-gray-800 uppercase lg:px-6">
                        Private Channels
                        </span>
                        <div className="pt-2 divide-gray-200">
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span># General</span>
                            <span className="text-gray-600">24</span>
                        </a>
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span># Support</span>
                            <span className="text-gray-600">45</span>
                        </a>
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm font-semibold text-blue-600 transition-colors duration-300 bg-gray-100 hover:text-blue-600 lg:px-6"
                        >
                            <span># Marketing</span>
                            <span className="text-blue-600">12</span>
                        </a>
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span># Sales</span>
                            <span className="text-gray-600">89</span>
                        </a>
                        <a
                            href="/"
                            className="flex justify-between px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:text-blue-600 hover:bg-gray-100 lg:px-6"
                        >
                            <span># Developers</span>
                            <span className="text-gray-600">64</span>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </aside>
        </div>
        <div className='w-full'>
                <Header />
            <div className='flex justify-between'>
                <div className='w-full'>
                    <CommentList />
                </div>
                <div className='w-[18rem]'>
                    <Admin />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Sidebar;
