import { useState, useEffect } from "react";
import { NavLink, useLocation } from "@remix-run/react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import {
  mobileNavContainerVariant,
  mobileNavListVariant,
  mobileNavExitProps,
} from "../data/animationConfig";

const activeClassName = "selected navlink";
const activeStyleCallback = ({ isActive }: { isActive: boolean }) =>
  isActive ? activeClassName : "navlink";

const NavLinks = () => {
  return (
    <div className="flex flex-col md:flex-row md:space-x-12 space-y-2 md:space-y-0">
      <NavLink to="/" className={activeStyleCallback}>
        Home
      </NavLink>
      <NavLink to="/events" className={activeStyleCallback}>
        Events
      </NavLink>
      <NavLink to="/gallery" className={activeStyleCallback}>
        Gallery
      </NavLink>
      <NavLink to="/support" className={activeStyleCallback}>
        Support
      </NavLink>
      <NavLink to="/media" className={activeStyleCallback}>
        Media
      </NavLink>
      <NavLink to="/apply" className={activeStyleCallback}>
        Apply
      </NavLink>
      <NavLink to="/contact" className={activeStyleCallback}>
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
      <nav className="flex items-center justify-between w-full p-4 md:p-0">
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
                <NavLink to={path} className={activeStyleCallback}>
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
