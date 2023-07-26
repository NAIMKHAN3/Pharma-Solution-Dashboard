import React from 'react';
import { CgMenuMotion } from "react-icons/cg"
import { BiSolidDownArrow, BiSearchAlt2 } from "react-icons/bi"

const Header = ({handleClick}) => {
    return (
        <div className="bg-white rounded flex justify-between items-center p-3">
        <div onClick={handleClick} className="cursor-pointer flex justify-between items-center">
          <CgMenuMotion size={24} />
          <div className="hidden lg:block">
            <div className='flex items-center border rounded-full px-2 py-1 ml-20 bg-[#ECF0F3]'>
            <input type="text" placeholder="Search Now" className="bg-[#ECF0F3]" />
            <BiSearchAlt2/>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="border-r-2 mr-3 pr-5">
            <img src="../../public/4563457.png" alt="" />
          </div>
          <div className="flex items-center">
            <img src="../../public/9230.png" alt="" />
            <h1 className="ml-3 font-semibold flex items-center">Bradly Robin <BiSolidDownArrow className="ml-1 text-secondary" size={12} /></h1>
          </div>
        </div>
      </div>
    );
};

export default Header;