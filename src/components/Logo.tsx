import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { logoRotationVariant } from "../data/animationConfig";

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.img
        alt="jm9"
        src="/src/assets/JM9.png" // Ensure this path is correct
        className="block w-[75px] h-auto rounded-full" // Added `h-auto` for better scaling
        width="75"
        height="50"
        variants={logoRotationVariant}
        layout="position"
      />
    </NavLink>
  );
};

export default Logo;
