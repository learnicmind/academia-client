import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
    }

    const navLinks = <>
        <li><Link className="text-lg font-semibold" to='/'>Home</Link></li>
        <li><Link className="text-lg font-semibold" to='/colleges'>Colleges</Link></li>
        <li><Link className="text-lg font-semibold" to='/admission'>Admission</Link></li>
        <li><Link className="text-lg font-semibold" to='/myCollege'>My College</Link></li>
    </>

    return (
        <div className=" bg-cover bg-[#14b8a6] w-full">
            <div className="mx-auto md:w-[1300px]">
                <div className="navbar py-4">
                    <div className="navbar-start text-white">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </label>
                            <ul tabIndex={0} className="menu bg-[#14b8a6] text-[#ccfbf1] text-xl menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52">
                                {navLinks}
                            </ul>
                        </div>

                        <div className="flex items-center justify-center">
                            <div>
                                <img className="h-9 w-9" src="https://i.ibb.co/j68cCyB/49-491401-square-academic-cap-vector-graduation-cap-logo-png-removebg-preview.png" alt="" />
                            </div>
                            <Link to='/'>
                                <p>
                                    <span className='md:text-3xl text-xl text-[#ccfbf1] tracking-wide font-bold'>A c a d e m i a</span>
                                </p>
                            </Link>

                        </div>

                    </div>
                    <div className="navbar-center bg-[#14b8a6] text-[#ccfbf1] hidden lg:flex">
                        <ul className="menu menu-horizontal flex gap-2">
                            {navLinks}
                        </ul>
                    </div>

                    <div className="navbar-end flex items-center gap-2">
                        {
                            user && <img title={user?.displayName} className='w-10 rounded-full' src='https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=Yyi5slaeNpq_HPcfgy1305VpJSwerPm_s7mTz_bBk6c=' />
                        }
                        {
                            user ?
                                <button onClick={handleLogout} className="btn">Logout</button>
                                :
                                <Link to='/login'><button className="btn">Login</button></Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;