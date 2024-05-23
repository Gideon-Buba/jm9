import { motion } from "framer-motion";
import { NavLink } from "@remix-run/react";
import { logoRotationVariant } from "../data/animationConfig";

export const Logo = () => {
  return (
    <NavLink to="/" className="inline-block">
      <motion.img
        alt="jm9"
        src="assets/JM9.png"
        className="block w-[75px]"
        width="75"
        height="50"
        variants={logoRotationVariant}
        layout="position"
      />
    </NavLink>
  );
};

export default Logo;
