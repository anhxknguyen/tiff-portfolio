/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Navbar = ({ current }) => {
  function isTouchDevice() {
    return window.matchMedia("(pointer: coarse)").matches;
  }
  return (
    <div className="flex flex-col items-center justify-between block w-full mt-5 lg:mt-8 lg:flex-row">
      <div className="flex justify-center w-full h-full lg:justify-end lg:flex-row lg:w-navbar lg:self-start">
        <ul className="flex justify-center w-full gap-10 pb-2 pl-0 border-b sm:text-lg lg:text-2xl lg:w-11/12 lg:justify-start lg:self-end border-textColor h-fit">
          {current === "/about" ? (
            <NavLink
              to="/about"
              className={`line-through ${
                isTouchDevice() == false && "hover:text-selectedColor"
              }`}
            >
              About
            </NavLink>
          ) : (
            <NavLink
              to="/about"
              className={isTouchDevice() == false && `hover:text-selectedColor`}
            >
              About
            </NavLink>
          )}
          {current === "/" ? (
            <NavLink
              to="/"
              className={`line-through ${
                isTouchDevice() === false && "hover:text-selectedColor"
              }`}
            >
              Portfolio
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className={isTouchDevice() == false && `hover:text-selectedColor`}
            >
              Portfolio
            </NavLink>
          )}
          <NavLink
            className={isTouchDevice() == false && `hover:text-selectedColor`}
            to="/contact"
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
