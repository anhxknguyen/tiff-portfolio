/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Navbar = ({ current }) => {
  return (
    <div className="flex flex-col items-center justify-between block w-full mt-16 lg:flex-row">
      <h1 className="text-6xl lg:pl-20 sm:text-7xl font-titleFont">
        Tiffany Xiang
      </h1>
      <div className="flex h-full lg:flex-row lg:w-1/2 lg:self-end">
        <ul className="flex pb-4 text-xl border-b msm:text-3xl sm:pb-8 sm:text-4xl gap-11 lg:w-11/12 lg:self-end border-textColor h-fit">
          {current === "/about" ? (
            <NavLink
              to="/about"
              className="line-through hover:text-selectedColor"
            >
              about
            </NavLink>
          ) : (
            <NavLink to="/about" className="hover:text-selectedColor">
              about
            </NavLink>
          )}
          {current === "/" ? (
            <NavLink to="/" className="line-through hover:text-selectedColor">
              portfolio
            </NavLink>
          ) : (
            <NavLink to="/" className="hover:text-selectedColor">
              portfolio
            </NavLink>
          )}
          <NavLink className="hover:text-selectedColor">resume</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
