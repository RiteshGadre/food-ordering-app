import { Link } from "react-router-dom";
import { logoImg } from "./Constant";
import { useState } from "react"
import SignIn from "./SignIn";
const Nav= () => {
    const [show, setShow] = useState(false);
    return (
        
        <nav className=" w-full hidden md:flex justify-between items-center px-5 h-16  ">
            {show && <SignIn show= {show} setShow= {setShow} ></SignIn>}

            <img className="logo w-10"  src={logoImg} alt="logo" />
            <ul className="md:none nav-items flex gap-20 font-medium text-white">
                {/* <Link to="./"><li>Home</li></Link>
                <Link to="./about"><li>About</li></Link>
                <Link to="./contact"><li>Contact</li></Link> */}
                <li
                 className="cursor-pointer"
                 onClick={() => {
                    setShow(1);
                }}>
                    Sign In
                </li>
                <li className="cursor-pointer">Cart</li>
            </ul>
            
        </nav>
    )
}

export default Nav;