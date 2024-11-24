import { useState } from 'react';
import Sidebar from '../Components/PagesComponent/Sidebar';
import Header from '../Components/PagesComponent/Header';
import Boxes from '../Components/FourBoxes';

const DashboardAdmin = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const textHeader = "Admin Dashboard";
    const textSubHeader = "Dashboard Admin";

    // Function to toggle sidebar visibility
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className='w-full h-full flex flex-col lg:flex-row'>
            {/* Hamburger Button (visible on small screens) */}
            <button
                onClick={toggleSidebar}
                className='lg:hidden p-4 focus:outline-none'
            >
                {/* Icon for Hamburger (can be an SVG or div with styling) */}
                <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                </svg>
            </button>

            {/* Sidebar */}
            <div className={`lg:w-[284px] h-screen lg:h-full fixed lg:static top-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 bg-white shadow-lg z-50`}>
                <Sidebar />
            </div>

            {/* Main Content */}
            <div className='flex-1'>
                <div>
                    <Header textHeader={textHeader} textSubHeader={textSubHeader} />
                </div>

                {/* Boxes */}
                <div className='w-full lg:w-[1112px] h-[108px] ml-10 mt-10'>
                    <Boxes />
                </div>
            </div>
        </div>
    );
}

export default DashboardAdmin;
