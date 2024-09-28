import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#1a1a1a] p-2 flex flex-col md:flex-row items-center justify-center md:justify-between  md:px-10 md:py-5">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src="Emperal.svg" alt="" className="h-10 mr-2" />
          <span className="text-white text-lg font-bold">EMPERAL TRAVELS</span>
        </div>

        <button 
          className="md:hidden text-white bg-[#4CAF50]  rounded-full" 
          onClick={toggleMenu}
        >
            <Hamburger></Hamburger>

        </button>

        <div className={`flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 ${isOpen ? 'hidden' : 'hidden'} md:flex`}>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">HOME</Link>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">ALL TOURIST SPOTS</Link>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">ADD TOURISTS SPOT</Link>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">MY LIST</Link>
          <Link to={'/contact'} className="text-white hover:text-[#4CAF50] text-lg font-bold">CONTACT</Link>
          <Link to={'/login'} className="text-white hover:text-[#4CAF50] text-lg font-bold">LOGIN</Link>
          <Link to={'/register'} className="text-white hover:text-[#4CAF50] text-lg font-bold">REGISTER</Link>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] p-4 rounded-[20px] mx-4 mt-2 flex flex-col space-y-4">
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">HOME</Link>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">ALL TOURIST SPOTS</Link>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">ADD TOURISTS SPOT</Link>
          <Link className="text-white hover:text-[#4CAF50] text-lg font-bold">MY LIST</Link>
          <Link to={'/contact'} className="text-white hover:text-[#4CAF50] text-lg font-bold">CONTACT</Link>
          <Link to={'/login'} className="text-white hover:text-[#4CAF50] text-lg font-bold">LOGIN</Link>
          <Link to={'/register'} className="text-white hover:text-[#4CAF50] text-lg font-bold">REGISTER</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;