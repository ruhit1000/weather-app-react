import React from 'react';
import { FaLocationArrow, FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = ({ userLocation, weatherData }) => {
    return (
        <div className='py-10 px-6 flex justify-between items-center'>
            <div className='flex gap-3 items-center '>
                <FaLocationDot color='white' size={24} />
                <div className="dropdown dropdown-start">
                    <div tabIndex={0} role="button" className="flex items-center gap-2 text-lg font-medium">{weatherData?.name || 'Location'} <IoIosArrowDown size='1.3rem' /></div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-transparent z-1 w-52 p-2 ">
                        <li><a onClick={userLocation}>Locate me <FaLocationArrow /></a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div>
            </div>
            <div className="avatar">
                <div className="w-7.5 rounded-full">
                    <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;