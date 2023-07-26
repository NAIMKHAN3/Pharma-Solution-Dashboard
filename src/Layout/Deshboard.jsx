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
      <div className="flex items-center  mx-auto">
        
          <Slider menuState={menuState} />
          
           <MobileSlider isCollups={isCollups} setIsCollups={setIsCollups} menuState={menuState} setMenuState={setMenuState}/>
          
          
        
        <div className={`w-full duration-300 rounded-lg bg-[#ECF0F3] min-h-screen`}>
         <Header handleClick={handleClick}/>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Deshboard;
