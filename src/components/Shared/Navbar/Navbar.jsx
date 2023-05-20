import { Link } from "react-router-dom";
import logo from '../../../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import ActiveLink from "../../Layout/ActiveLink/ActiveLink";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(() => { });
    }
    const loginItems = <>
        <ActiveLink to="/allToys"> <li>All Toys</li></ActiveLink>
        <ActiveLink to="/myToys"><li>My Toys</li></ActiveLink>
        <ActiveLink to="/addToy"><li>Add a Toy</li></ActiveLink>

    </>
    const listItems = <>
        <ActiveLink to="/"><li>Home</li></ActiveLink>
        <ActiveLink to="/blogs"><li>Blogs</li></ActiveLink>
    </>
    return (
        <div className="navbar bg-stone-800 text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {listItems}
                        {
                            user ?
                                <>
                                    {loginItems}
                                </>
                                :
                                <Link to='/login'>
                                    <li className="btn btn-warning">Login</li>
                                </Link>
                        }
                    </ul>
                </div>
                <div className="flex items-center">
                    <Link to="/" className="normal-case font-bold text-2xl">
                        <img className="w-20 " src={logo} alt="" />
                    </Link>
                    <Link to="/" className="normal-case font-bold text-2xl">
                        Toy<span className="text-orange-400">Zone</span>
                    </Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-5 px-1">
                    {listItems}
                    {
                        user ?
                            <>
                                {loginItems}
                            </>
                            :
                            <>
                            </>

                    }

                </ul>
            </div>
            <div className="navbar-end">
                <ul className="menu menu-horizontal gap-5 px-1">

                    {
                        user ?
                            <>
                                <img className='w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ' src={user?.photoURL} alt="" title={user?.displayName} />
                                <button onClick={handleLogOut} className="btn btn-warning btn-outline ">
                                    Logout
                                </button>
                            </>
                            :
                            <Link to='/login'>
                                <li className="btn btn-accent">Login</li>
                            </Link>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;