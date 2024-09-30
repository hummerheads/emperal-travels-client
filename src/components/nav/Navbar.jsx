import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from 'hamburger-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../authProvider/AuthProvider'; // Import useAuth

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); 
  const [isAvatarDropdownOpen, setIsAvatarDropdownOpen] = useState(false); // State for avatar dropdown
  const { user, logout } = useAuth(); // Get user info and logout function from Auth context

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleAvatarDropdown = () => {
    setIsAvatarDropdownOpen(!isAvatarDropdownOpen);
  };

  const closeAvatarDropdown = () => {
    setIsAvatarDropdownOpen(false);
  };

  return (
    <div>
      <nav className="bg-[#1a1a1a] p-2 flex flex-col md:flex-row items-center justify-center md:justify-between md:px-10 md:py-5">
        <div className="flex items-center justify-between w-full md:w-auto">
          <img src="/Emperal.svg" alt="" className="h-10 mr-2" />
          <span className="text-white text-md font-bold">EMPERAL TRAVELS</span>
        </div>

        <button 
          className="md:hidden text-white bg-[#4CAF50] rounded-full" 
          onClick={toggleMenu}
        >
            <Hamburger />
        </button>

        <div className={`flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 ${isOpen ? 'hidden' : 'hidden'} md:flex`}>
          <Link className="text-white hover:text-[#4CAF50] text-md font-bold">HOME</Link>
          
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              className="text-white hover:text-[#4CAF50] text-md font-bold flex items-center"
            >
              TOURIST SPOT
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-[#1a1a1a] rounded-lg shadow-lg mt-2 p-2 z-10">
                <Link 
                  to={'/all-tourist-spots'} 
                  onClick={closeDropdown} 
                  className="block text-white hover:text-[#4CAF50] text-center text-md font-bold mb-1"
                >
                  ALL TOURIST SPOTS
                </Link>
                <hr className="mb-1" />
                <Link 
                  to={'/add-tourist-spot'} 
                  onClick={closeDropdown} 
                  className="block text-white hover:text-[#4CAF50] text-center text-md font-bold"
                >
                  ADD TOURISTS SPOT
                </Link>
              </div>
            )}
          </div>

          <Link to={'/my-list'} className="text-white hover:text-[#4CAF50] text-md font-bold">MY LIST</Link>
          <Link to={'/contact'} className="text-white hover:text-[#4CAF50] text-md font-bold">CONTACT</Link>

          {/* Conditional Rendering for Login/Register or Profile Picture */}
          {user ? (
            <div className="relative flex items-center">
              {/* Display User's Profile Picture */}
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className="h-8 w-8 rounded-full mr-2 cursor-pointer" 
                onClick={toggleAvatarDropdown} // Toggle avatar dropdown on click
              />
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 bg-[#1a1a1a] rounded-lg shadow-lg mt-2 p-2 z-10">
                  <Link to="/profile" onClick={closeAvatarDropdown} className="block text-white hover:text-[#4CAF50] text-md font-bold mb-1">
                    My Profile
                  </Link>
                  <hr className="mb-1" />
                  <button onClick={() => { logout(); closeAvatarDropdown(); }} className="block w-full text-left text-white hover:text-[#4CAF50] text-md font-bold">
                    Logout
                  </button>
                </div>
              )}
              <span className="text-white">{user.displayName || "User"}</span>
            </div>
          ) : (
            <>
              <Link to={'/login'} className="text-white hover:text-[#4CAF50] text-md font-bold">LOGIN</Link>
              <Link to={'/register'} className="text-white hover:text-[#4CAF50] text-md font-bold">REGISTER</Link>
            </>
          )}
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-[#1a1a1a] p-4 rounded-[20px] mx-4 mt-2 flex flex-col space-y-4">
          <Link className="text-white hover:text-[#4CAF50] text-sm font-bold">HOME</Link>
          
          {/* Dropdown for Tourist Spots in mobile view */}
          <div className="relative">
            <button 
              onClick={toggleDropdown} 
              className="text-white hover:text-[#4CAF50] text-sm font-bold flex items-center"
            >
              TOURIST SPOT
              <FontAwesomeIcon icon={isDropdownOpen ? faChevronUp : faChevronDown} className="ml-2" />
            </button>
            {isDropdownOpen && (
              <div className="absolute bg-[#1a1a1a] rounded-lg shadow-lg mt-2 p-2 z-10">
                <Link 
                  to={'/all-tourist-spots'} 
                  onClick={closeDropdown} 
                  className="block text-white hover:text-[#4CAF50] text-sm font-bold mb-2"
                >
                  ALL TOURIST SPOTS
                </Link>
                <Link 
                  to={'/add-tourist-spot'} 
                  onClick={closeDropdown} 
                  className="block text-white hover:text-[#4CAF50] text-sm font-bold"
                >
                  ADD TOURISTS SPOT
                </Link>
              </div>
            )}
          </div>

          <Link to={'/my-list'} className="text-white hover:text-[#4CAF50] text-sm font-bold">MY LIST</Link>
          <Link to={'/contact'} className="text-white hover:text-[#4CAF50] text-sm font-bold">CONTACT</Link>

          {/* Conditional Rendering for Login/Register or Profile Picture in mobile view */}
          {user ? (
            <div className="relative flex items-center">
              {/* Display User's Profile Picture */}
              <img 
                src={user.photoURL} 
                alt="Profile" 
                className="h-10 w-10 rounded-full mr-2 cursor-pointer" 
                onClick={toggleAvatarDropdown}
              />
              {isAvatarDropdownOpen && (
                <div className="absolute right-0 bg-[#1a1a1a] rounded-lg shadow-lg mt-2 p-2 z-10">
                  <Link to="/profile" onClick={closeAvatarDropdown} className="block text-white hover:text-[#4CAF50] text-md font-bold mb-1">
                    My Profile
                  </Link>
                  <hr className="mb-1" />
                  <button onClick={() => { logout(); closeAvatarDropdown(); }} className="block w-full text-left text-white hover:text-[#4CAF50] text-md font-bold">
                    Logout
                  </button>
                </div>
              )}
              <span className="text-white">{user.displayName || "User"}</span>
            </div>
          ) : (
            <>
              <Link to={'/login'} className="text-white hover:text-[#4CAF50] text-sm font-bold">LOGIN</Link>
              <Link to={'/register'} className="text-white hover:text-[#4CAF50] text-sm font-bold">REGISTER</Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;