import { Link } from "react-scroll";

const Nav: React.FC = () => {
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-blue-800 lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <img src="logo.png" alt="logo"/>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]">
                            <Link to="Home" spy={true} smooth={true} className="cursor-pointer">
                                <li className="hover:text-blue-950 transition border-b-2 border-b-blue-400 hover:border-b-blue-900 cursor-pointer" >Home</li>
                            </Link>
                            <Link to="About" spy={true} smooth={true} className="cursor-pointer">
                                <li className="hover:text-blue-950 transition border-b-2 border-b-blue-400 hover:border-b-blue-900 cursor-pointer" >Events</li>
                            </Link>
                            <Link to="Services" spy={true} smooth={true} className="cursor-pointer">
                                <li className="hover:text-blue-950 transition border-b-2 border-b-blue-400 hover:border-b-blue-900 cursor-pointer" >Gallery</li>
                            </Link>
                            <Link to="Media" spy={true} smooth={true} className="cursor-pointer">
                                <li className="hover:text-blue-950 transition border-b-2 border-b-blue-400 hover:border-b-blue-900 cursor-pointer" >Media</li>
                            </Link>
                            <Link to="Get-involved" spy={true} smooth={true} className="cursor-pointer">
                                <li className="hover:text-blue-950 transition border-b-2 border-b-blue-400 hover:border-b-blue-900 cursor-pointer" >Get Involved</li>
                            </Link>
                            <Link to="Contact" spy={true} smooth={true} className="cursor-pointer">
                                <li className="hover:text-blue-950 transition border-b-2 border-b-blue-400 hover:border-b-blue-900 cursor-pointer" >Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
