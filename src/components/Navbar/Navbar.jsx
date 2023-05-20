import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div className="top-8">
            <div className="container mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn bg-pink-600 lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2  rounded-box w-52">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/AllToys">All Toys</Link></li>
                                <li><Link to="/MyToys">My Toys</Link></li>
                                <li><Link to="/AddAToy">Add A Toy</Link></li>
                                <li><Link to="/blogs">Blogs</Link></li>
                            </ul>
                        </div>
                        <img className="h-[60px] w-[60px]" src="https://i.ebayimg.com/images/g/WXEAAOSw7Q1f66-h/s-l500.jpg" alt="" />
                        <a className="btn bg-pink-600 border-none normal-case text-xl">Dolls World</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/AllToys">All Toys</Link></li>

                            <li><Link to="/MyToys">My Toys</Link></li>

                            <li><Link to="/AddAToy">Add A Toy</Link></li>
                            <li><Link to="/blogs">Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        {
                            user?.email ? <>

                                <button onClick={handleLogOut} className='btn bg-pink-600 border-none'>Sign Out</button>

                            </> : <Link to="/login" className="btn bg-pink-600 border-none text-xl">Log In</Link >
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;