import { Link } from "react-router-dom";
import { logoImg } from "./Constant";
const Nav= () => {
    return (

        <nav className=" w-full hidden md:flex justify-between items-center px-5 h-16  ">
            <img className="logo w-10"  src={logoImg} alt="logo" />
            <ul className="md:none nav-items flex gap-20 font-medium text-white">
                <Link to="./"><li>Home</li></Link>
                <Link to="./about"><li>About</li></Link>
                <Link to="./contact"><li>Contact</li></Link>
                <li>Sign In</li>
                <li>Cart</li>
            </ul>
            
        </nav>
    )
}

export default Nav;