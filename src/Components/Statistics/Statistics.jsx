import totalCustomer from "../../../public/tottalCustomer.png";
import medicine from "../../../public/medicine.png";
import stock from "../../../public/outOfStock.png";
import expireMedicine from "../../../public/expired.png";
import { BsArrowUpShort } from "react-icons/bs";

const Statistics = () => {
  return (
    <div className="text-[#424e79]">
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-3 rounded-lg flex justify-between">
          <div>
            <h1 className="text-xs">Total customer</h1>
            <h1 className="text-2xl font-bold">45</h1>
            <button className="text-xs flex items-center text-[#6554c0]">
              <BsArrowUpShort />
              Show details
            </button>
          </div>
          <div>
            <img src={totalCustomer} alt="" width={40} />
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg flex justify-between">
          <div>
            <h1 className="text-xs">Total Medicine</h1>
            <h1 className="text-2xl font-bold">751</h1>
            <button className="text-xs flex items-center text-[#ff8a8a] ">
              <BsArrowUpShort />
              Show details
            </button>
          </div>
          <div>
            <img src={medicine} alt="" width={40} />
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg flex justify-between">
          <div>
            <h1 className="text-xs">Out Of Stock</h1>
            <h1 className="text-2xl font-bold">715</h1>
            <button className="text-xs flex items-center text-[#ffa958]">
              <BsArrowUpShort />
              Show details
            </button>
          </div>
          <div>
            <img src={stock} alt="" width={40} />
          </div>
        </div>
        <div className="bg-white p-3 rounded-lg flex justify-between">
          <div>
            <h1 className="text-xs">Expired Medicine</h1>
            <h1 className="text-2xl font-bold">33</h1>
            <button className="text-xs flex items-center text-[#45b854]">
              <BsArrowUpShort />
              Show details
            </button>
          </div>
          <div>
            <img src={expireMedicine} alt="" width={40} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
