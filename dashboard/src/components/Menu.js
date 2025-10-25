import React, { useState, useEffect } from "react";
// hooks -> useState
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { tooltip, Grow, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom';
const Menu = ({ username }) => {
    const [selectedMenu, setSelectedMenu] = useState(0);
    const [isProfileDropddownOpen, setIsProfileDropddownOpen] = useState(false);
    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };
    const handleProfileClick = (index) => {
        setIsProfileDropddownOpen(!isProfileDropddownOpen);
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";
    const handleLogout = async() => {
        try {
            // call backend logout to clear cookie
            await axios.get("http://localhost:3002/logout", { withCredentials: true });
            toast.success("Logged out successfully!", {
            position: "top-right",
        });
            setTimeout(() => {
            localStorage.removeItem("token");
            window.location.href = "http://localhost:3000/login";
        }, 1000);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <div className="menu-container">
            {/* <img src="logo.png" style={{ width: "50px" }} /> */}
            <i class="fa fa-th fs-2" aria-hidden="true" style={{color:"#e62e00"}}></i>
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}><p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p></Link>

                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}><p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p></Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}><p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p></Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}><p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p></Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}><p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p></Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}><p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p></Link>
                    </li>
                </ul>
                <hr />

                <div className="profile dropdown-center">
                    <div onClick={handleProfileClick}>
                        <i class="fa fa-user-circle fs-5" aria-hidden="true"></i>
                    </div>
                    <p className="username mt-3" onClick={handleProfileClick}>{username}</p>

                    {isProfileDropddownOpen && <button onClick={handleLogout} style={{ zIndex: "4" }}>LOGOUT</button>}
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Menu;