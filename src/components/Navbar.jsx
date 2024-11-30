import { Link } from "react-router-dom";
import logoPic from '../assets/icons/1.png'
import bgPic from '../assets/more/15.jpg'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
    const {name}=useContext(AuthContext)
    const links=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/addCoffee'>Add coffee</Link></li>
    <li><Link to='/sign-in'>Sign In</Link></li>
    <li><Link to='/users'>User</Link></li>
    </>
    return (
        <div className="navbar bg-navbar-bg bg-cover bg-center text-white px-16 py-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl flex items-center"><img src={logoPic} alt="" />  Espresso Emporium</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <p>{name}</p>
            </div>
        </div>
    );
};

export default Navbar;