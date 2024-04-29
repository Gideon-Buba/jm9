import {NavLink} from "react-router-dom";

const Navbar:React.FC = () => {
    return (
        <div className="w-1/3">
            <NavLink>Home</NavLink>
            <NavLink>Event</NavLink>
            <NavLink>Gallery</NavLink>
            <NavLink>Media</NavLink>
            <NavLink>Join us</NavLink>
            <NavLink>Contact Us</NavLink>
        </div>
    )
}

export default Navbar