import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import main from '../../../assets/icon/main.svg';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const menuItem = <React.Fragment>
        <li className='hover:bg-gradient-to-r from-primary to-secondary hover:text-white'><Link to='/home'>Home</Link></li>
        <li className='hover:bg-gradient-to-r from-primary to-secondary hover:text-white'><Link to='/blog'>Blog</Link></li>
        {user?.uid ?
            <>
                <li className='hover:bg-gradient-to-r from-primary to-secondary hover:text-white'><Link to='/dashboard'>Dashboard</Link></li>
                <li className='bg-gradient-to-r from-secondary to-primary text-white rounded-lg'><button onClick={handleLogout}>Sign Out</button></li>
            </>
            :
            <li className='bg-gradient-to-r from-secondary to-primary text-white rounded-lg'><Link to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="sticky top-0 z-50 w-full navbar bg-base-100 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='h-8 mr-2' src={main} alt="" /> E-Exchange </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div>
    );
};

export default Navbar;