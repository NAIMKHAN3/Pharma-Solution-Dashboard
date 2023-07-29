import { Outlet } from "react-router-dom";
import Slider from "./Slider";
import { useState } from "react";
import MobileSlider from "./MobileSlider";
import Header from "../Components/Header";



const Deshboard = () => {
  const [menuState, setMenuState] = useState(true)
  const [isCollups, setIsCollups] = useState(true)

  const handleClick = () => {
    setIsCollups(!isCollups)
    setMenuState(!menuState)
  }
  return (
    <div>
      <div className="flex">
        
          <Slider menuState={menuState} />
          
           <MobileSlider isCollups={isCollups} setIsCollups={setIsCollups} menuState={menuState} setMenuState={setMenuState}/>
          
          
        
        <div className={`w-full duration-300 bg-[#ecf0f4]`}>
         <Header handleClick={handleClick}/>
          <Outlet />
        </div>
      </div>
      <h1 className="text-center py-2 text-[#424e79]">Copyright@2022 Bangladesh Design With by Kamrul Islam</h1>
    </div>
  );
};

export default Deshboard;
