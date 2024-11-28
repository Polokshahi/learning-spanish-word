import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaBookReader } from "react-icons/fa";
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  useEffect(() => {

    document.title = 'Home';

  },[])

  return (
    <header className="bg-gradient-to-r from-violet-200 to-pink-200 shadow-md p-4 ">
    
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 px-5 space-y-4 md:space-y-0">

        <div className="flex items-center gap-4">
          <FaBookReader className="text-3xl text-orange-400"></FaBookReader>
          <Link to="/" className="text-2xl font-bold">
            Lingo Bingo
          </Link>
        </div>

        

      
        <div className="text-gray-600 text-center md:text-left">
          <span className='text-xl'>Welcome{' '}</span>
          <span className="font-semibold text-2xl text-black">
            {user?.displayName ? user?.displayName : ''}
          </span>
        </div>

     
        <div className="flex items-center gap-4 md:gap-6">
          {user ? (
            <Link to="/my_profile" className="w-12 h-12">
              <img
                className="rounded-full w-full h-full object-cover"
                alt="Profile"
                src={user.photoURL}
              />
            </Link>
          ) : (
            <CgProfile className="text-3xl" />
          )}

          {user && user?.email ? (
            <Link to={'/'}
              onClick={logOut}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              LogOut
            </Link >
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Login
            </Link>
          )}

          {!user || !user?.email ? (
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Register
            </Link>
          ) : null}
        </div>
      </div>

     
      <nav className={`flex flex-wrap justify-center md:justify-center lg:justify-center space-x-3 border-t pt-3`}>
        <NavLink
          to="/"
          className= "p-2 rounded-lg font-semibold"
        >
          Home
        </NavLink>
        <NavLink
          to="/learning"
          className="p-2 rounded-lg font-semibold"
        >
          Start Learning
        </NavLink>
        {user && user.email ? (
          <NavLink
            to="/tutorials"
            className="p-2 rounded-lg font-semibold"
          >
            Tutorials
          </NavLink>
        ) : null}
        <NavLink
          to="/about-us"
          className="p-2 rounded-lg font-semibold"
        >
          About Us
        </NavLink>
        {user && user?.email ? (
          <NavLink
            to="/my_profile"
            className="p-2 rounded-lg font-semibold"
          >
            My Profile
          </NavLink>
        ) : null}
      </nav>
    </header>
  );
};

export default Header;
