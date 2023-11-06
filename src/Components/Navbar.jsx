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
    <div className="flex flex-col items-center justify-between block w-full mt-5 lg:mt-10 lg:flex-row">
      <h1 className="hidden lg:pl-20 lg:block sm:text-7xl font-titleFont">
        Tiffany Xiang
      </h1>
      <div className="flex justify-center w-full h-full lg:justify-start lg:flex-row lg:w-1/2 lg:self-end">
        <ul className="flex justify-center w-full pb-4 text-xl border-b lg:w-11/12 lg:justify-start msm:text-3xl sm:pb-4 sm:text-4xl gap-11 lg:self-end border-textColor h-fit">
          {current === "/about" ? (
            <NavLink
              to="/about"
              className={`line-through ${
                isTouchDevice() == false && "sm:hover:text-selectedColor"
              }`}
            >
              About
            </NavLink>
          ) : (
            <NavLink
              to="/about"
              className={
                isTouchDevice() == false && `sm:hover:text-selectedColor`
              }
            >
              About
            </NavLink>
          )}
          {current === "/" ? (
            <NavLink
              to="/"
              className={`line-through ${
                isTouchDevice() === false && "sm:hover:text-selectedColor"
              }`}
            >
              Portfolio
            </NavLink>
          ) : (
            <NavLink
              to="/"
              className={
                isTouchDevice() == false && `sm:hover:text-selectedColor`
              }
            >
              Portfolio
            </NavLink>
          )}
          <NavLink
            className={
              isTouchDevice() == false && `sm:hover:text-selectedColor`
            }
          >
            Resume
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
