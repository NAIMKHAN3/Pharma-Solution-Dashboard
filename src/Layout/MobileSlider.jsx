import React from 'react';
import { ImCross } from "react-icons/im"
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const MobileSlider = ({ isCollups, setIsCollups, menuState, setMenuState }) => {
    const handleClick = ()=>{
        setIsCollups(!isCollups)
        setMenuState(!menuState)
        setM
    }
    return (
        <div className={`${!isCollups ? "left-0" : "left-[-200px]"} absolute top-0 left-0 block lg:hidden duration-300 bg-white rounded-md text-secondary`}>
            <ul className="flex flex-col h-full">
                <li className={`font-semibold px-3 mt-4 flex justify-between items-center`}>
                    <img className='w-28' src="./Group 19.png" alt="" />
                    <span onClick={handleClick} className='cursor-pointer'>
                        <ImCross />
                    </span>
                </li>

                <li>
                    <div className={`flex items-center mt-10 px-3`}>
                        <img src="./Group 20.png" alt="" />
                        <div className="ml-2">
                            <h1 className="text-sm ">Admin User</h1>
                            <p className="text-sm">admin@gmail.com</p>
                        </div>
                    </div>
                </li>
                <hr className={`mt-2 mb-2 ${!isCollups && "hidden"}`} />
                <Link to='/dashboard'>
          <li className="mt-4 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
            <div className="flex items-center">
              <img className="mr-2" src="./45345.png" alt="" />
              {
                !isCollups && <span>Dashboard</span>
              }
            </div>
            <IoIosArrowForward />
          </li>
        </Link>
        <Link to='/customers'>
          <li className="mt-2 flex justify-between items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
            <div className="flex items-center">
              <img className="mr-2" src="./33308.png" alt="" />
              {
                !isCollups && <span>Customer</span>
              }
            </div>
            <IoIosArrowForward />
          </li>
        </Link>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./3633274.png" alt="" />
                    <span>Supplier</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./656019.png" alt="" />
                    <span>Inventory/Medicine</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./3144456.png" alt="" />
                    <span> Purchash</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./69881.png" alt="" />
                    <span>Invoice</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./4989753.png" alt="" />
                    <span>Return</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./5754119.png" alt="" />
                    <span>Stock</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./2838851.png" alt="" />
                    <span>Bank</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./3398016.png" alt="" />
                    <span>Accounts</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./613307.png" alt="" />
                    <span>Reports</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./3596091.png" alt="" />
                    <span>Human Resourse</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./6366502.png" alt="" />
                    <span>Tax</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./1686760.png" alt="" />
                    <span>Services</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./355732.png" alt="" />
                    <span>Search</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./786433.png" alt="" />
                    <span>Application Setting</span>
                </li>
                <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
                    <img className="mr-2" src="./21523454.png" alt="" />
                    <span>Auto Update</span>
                </li>


                {/* <li className="mt-auto">
            <Link to="/">Back to home</Link>
          </li> */}
            </ul>
        </div>
    );
};

export default MobileSlider;