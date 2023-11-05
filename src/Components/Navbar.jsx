/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Navbar = ({ current }) => {
  return (
    <div className="items-center justify-between block w-full mt-16 lg:flex">
      <h1 className="pl-20 text-7xl font-titleFont">Tiffany Xiang</h1>
      <div className="self-end w-1/2 h-full">
        <ul className="self-end block w-11/12 pb-8 text-4xl border-b lg:flex border-textColor gap-11 h-fit">
          {current === "/about" ? (
            <NavLink to="/about" className="text-selectedColor">
              about
            </NavLink>
          ) : (
            <NavLink to="/about">about</NavLink>
          )}
          {current === "/" ? (
            <NavLink to="/" className="text-selectedColor">
              portfolio
            </NavLink>
          ) : (
            <NavLink to="/">portfolio</NavLink>
          )}{" "}
          <NavLink>resume</NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
