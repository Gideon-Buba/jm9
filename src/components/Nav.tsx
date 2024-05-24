import { useState, useEffect } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

const NavLinks = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-10 space-y-2 md:space-y-0">
      <NavLink
        to="/"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Home
      </NavLink>
      <NavLink
        to="/events"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Events
      </NavLink>
      <NavLink
        to="/gallery"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/support"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Support
      </NavLink>
      <NavLink
        to="/media"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Media
      </NavLink>
      <NavLink
        to="/apply"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Apply
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => `navlink ${isActive ? "selected" : ""}`}
      >
        Contact
      </NavLink>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex items-center justify-between w-full p-4 md:p-0 md:justify-end">
        <div className="hidden md:flex justify-center flex-1">
          <NavLinks />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleNavbar}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>
      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            layout="position"
            key="nav-links"
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            className="mt-4 basis-full md:hidden flex flex-col items-center"
          >
            {[
              "/",
              "/events",
              "/gallery",
              "/support",
              "/media",
              "/apply",
              "/contact",
            ].map((path, index) => (
              <motion.div
                key={index}
                variants={mobileNavListVariant}
                {...mobileNavExitProps}
              >
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `navlink ${isActive ? "selected" : ""}`
                  }
                >
                  {path.substring(1) || "Home"}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
