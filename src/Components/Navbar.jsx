/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Navbar = ({ current }) => {
  function isTouchDevice() {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  }

  return (
    <div className="flex flex-col items-center justify-between block w-full mt-5 lg:mt-8 lg:flex-row">
      <h1 className="hidden lg:pl-20 lg:block sm:text-5xl font-titleFont">
        TX
      </h1>
      <div className="flex justify-center w-full h-full lg:justify-start lg:flex-row lg:w-navbar lg:self-end">
        <ul className="flex justify-center w-full pb-4 text-base border-b lg:w-11/12 lg:justify-start msm:text-xl sm:pb-4 sm:text-2xl gap-11 lg:self-end border-textColor h-fit">
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
          >
            Resume
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
