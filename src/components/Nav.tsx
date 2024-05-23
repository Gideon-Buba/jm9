import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
export const NavLinks = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/events">Events</NavLink>
      <NavLink to="/gallery">Gallery</NavLink>
      <NavLink to="/support">Support</NavLink>
      <NavLink to="/media">Media</NavLink>
      <NavLink to="/apply">Apply</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
};

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav className="w-1/3 flex justify-end">
        <div className="hidden w-full md:flex justify-between">
          <NavLinks />
        </div>
        <div className="md:hidden">
          <button onClick={toggleNavbar}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col items-center">
          <NavLinks />
        </div>
      )}
    </>
  );
};
