import { AiOutlineHome } from "react-icons/ai";
import { CgUserList } from "react-icons/cg";
import { FaList } from "react-icons/fa";
import { MdOutlineAddBox } from "react-icons/md";
import { Link } from "react-router-dom";
import { BiTransfer } from "react-icons/bi";

const Slider = () => {
  return (
    <div className="col-span-2 bg-white h-screen rounded-md text-secondary">
      <ul className="flex flex-col h-full">
        <li className="font-semibold text-primary mx-auto mt-4"><img src="../../public/Group 19.png" alt="" /></li>
        
        <li>
          <div className="flex items-center mt-10 px-3">
            <img src="../../public/Group 20.png" alt="" />
            <div className="ml-2">
            <h1 className="text-sm ">Admin User</h1>
            <p className="text-sm">admin@gmail.com</p>
            </div>
          </div>
        </li>
        <hr className="mt-2" />
        <li className="mt-6 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
        <img className="mr-2" src="../../public/45345.png" alt="" />
          <Link to="/deshboard/deshboard-page">Dashboard</Link>
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/33308.png" alt="" />
          Customer
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3633274.png" alt="" />
          Supplier
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/656019.png" alt="" />
         Inventory/Medicine
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3144456.png" alt="" />
          Purchash
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/69881.png" alt="" />
         Invoice
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/4989753.png" alt="" />
          Return
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
        <img className="mr-2" src="../../public/5754119.png" alt="" />
          
          Stock
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
        <img className="mr-2" src="../../public/2838851.png" alt="" />
          
          Bank
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
        <img className="mr-2" src="../../public/3398016.png" alt="" />
          Accounts
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/613307.png" alt="" />
         Reports
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3596091.png" alt="" />
          Human Resourse
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/6366502.png" alt="" />
          Tax
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/1686760.png" alt="" />
          Services
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/355732.png" alt="" />
          Search
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/786433.png" alt="" />
          Application Setting
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/21523454.png" alt="" />
          Auto Update
        </li>
        

        {/* <li className="mt-auto">
          <Link to="/">Back to home</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Slider;
