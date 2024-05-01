import {Link} from "react-scroll";

const Nav = () => {
    const content = <>
        <div className="lg: hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
            <ul className="text-center text-xl p-20">
                <Link spy={true} smooth={true} to="Home"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Home</li></Link>
                <Link spy={true} smooth={true} to="About"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Events</li></Link>
                <Link spy={true} smooth={true} to="Services"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Gallery</li></Link>
                <Link spy={true} smooth={true} to="Media"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Media</li></Link>
                <Link spy={true} smooth={true} to="Get-involved"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Get Involved</li></Link>
                <Link spy={true} smooth={true} to="Contact"><li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">Contact</li></Link>
            </ul>
        </div>
    </>
    return (
        <nav>
            <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
                <div className="flex items-center flex-1">
                    <span className="text-3xl font-bold">LOGO</span>
                </div>
                <div className="lg:flex md:flex lg: flex-1 items-center justify-end font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 mr-16 text-[18px]"> spy={true} smooth={true}
                            <Link spy={true} smooth={true} to="Home">
                                <li>Home</li>
                            </Link>
                            <Link spy={true} smooth={true} to="About">
                                <li>Events</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Services">
                                <li>Gallery</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Media">
                                <li>Media</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Get-involved">
                                <li>Get Involved</li>
                            </Link>
                            <Link spy={true} smooth={true} to="Contact">
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;