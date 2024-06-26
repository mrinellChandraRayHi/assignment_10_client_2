import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Nav = () => {
    const {user, signOUT}=useContext(AuthContext);
    const handleSignOut=()=>{
        signOUT()
        .then(()=>{
            console.log('SignOut Success');
        }).catch((error)=>{
            console.log(error.message);
        })
    }
    const navlink=<>
    <li><NavLink to='/'>Home</NavLink></li>
    {
        user && <>
            <li><NavLink to='/allArtAndCraftItems'>All Art & Craft Items</NavLink></li>
            <li><NavLink to='/addCraftItem'>Add Craft</NavLink></li>
            <li><NavLink to='/myArtAndCraftList'>My Art and Crafts</NavLink></li>
        </>
    }
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navlink}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?<>
                    <div>{user.email}</div>
                    <div onClick={handleSignOut}><a className="btn ml-2">SignOut</a></div>
                    </>:<Link to='/signUp'><a className="btn">SignUp</a></Link>
                }
            </div>
        </div>
    );
};

export default Nav;