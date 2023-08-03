import { Link, NavLink } from "react-router-dom";
import { FaBars, FaXing } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className=" bg-gray-100 px-4 py-5 ">
      <div className=" flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <h1 className="">
           <img src="https://i.ibb.co/pLq46HX/WEB-1.png" alt="" className="w-60 "/>
          </h1>
        </Link>
        {/* navLink */}
        <ul className="lg:flex space-x-8 items-center hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Blog
            </NavLink>
          </li>
        </ul>
        {/* mobile Nav */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpenMenu(true)}>
            <FaBars></FaBars>
          </button>
          {isOpenMenu && (
            <div className="absolute  top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm">
                {/* logo nd button */}
                <div className="flex items-center justify-between mb-4">
                  {/* logo */}
                  <Link className="className='inline-flex items-center" to="/">
                    <h1 className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                      Logo
                    </h1>
                  </Link>
                  <button onClick={() => setIsOpenMenu(false)}>
                    <FaXing></FaXing>
                  </button>
                </div>
                {/* mobile view */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/about'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/contact'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
