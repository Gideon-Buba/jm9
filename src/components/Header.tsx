import Logo from "./Logo";
import Navbar from "./Navbar.tsx";

const Header: React.FC = () => {
    return (
        <header className="bg-dark-background sticky top-0 z-[20] mx-auto flex w-full items-center justify-between">
            <Logo/>
            <Navbar/>

        </header>
    )
}

export default Header