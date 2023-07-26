
const Slider = ({ menuState }) => {
  return (
    <div className={` ${menuState ? "w-[20%] duration-300" : "duration-300"} hidden lg:block bg-white h-screen rounded-md text-secondary lg:ml-2`}>
      <ul className="flex flex-col h-full">
        <li className={`font-semibold px-3 mt-4 ${!menuState && "hidden"}`}><img src="../../public/Group 19.png" alt="" /></li>

        <li>
          <div className={`flex items-center mt-10 px-3 ${!menuState && "hidden"}`}>
            <img src="../../public/Group 20.png" alt="" />
            <div className="ml-2">
              <h1 className="text-sm ">Admin User</h1>
              <p className="text-sm">admin@gmail.com</p>
            </div>
          </div>
        </li>
        <hr className={`mt-2 mb-2 ${!menuState && "hidden"}`} />
        <li className="mt-4 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/45345.png" alt="" />
          {
            menuState && <span>Dashboard</span>
          } 
        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/33308.png" alt="" />
          {
            menuState && <span>Customer</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3633274.png" alt="" />
          {
            menuState && <span>Supplier</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/656019.png" alt="" />
          {
            menuState && <span>Inventory/Medicine</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3144456.png" alt="" />
          {
            menuState && <span> Purchash</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/69881.png" alt="" />
          {
            menuState && <span>Invoice</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/4989753.png" alt="" />
          {
            menuState && <span>Return</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/5754119.png" alt="" />
          {
            menuState && <span>Stock</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/2838851.png" alt="" />
          {
            menuState && <span>Bank</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3398016.png" alt="" />
          {
            menuState && <span>Accounts</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/613307.png" alt="" />
          {
            menuState && <span>Reports</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/3596091.png" alt="" />
          {
            menuState && <span>Human Resourse</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/6366502.png" alt="" />
          {
            menuState && <span>Tax</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/1686760.png" alt="" />
          {
            menuState && <span>Services</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/355732.png" alt="" />
          {
            menuState && <span>Search</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/786433.png" alt="" />
          {
            menuState && <span>Application Setting</span>
          }        </li>
        <li className="mt-2 flex items-center hover:shadow-md cursor-pointer rounded px-2 py-1 mx-2">
          <img className="mr-2" src="../../public/21523454.png" alt="" />
          {
            menuState && <span>Auto Update</span>
          }        </li>


        {/* <li className="mt-auto">
          <Link to="/">Back to home</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Slider;
