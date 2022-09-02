import React, {useContext} from 'react';

import './Sidebar.scss'
import {MdBorderColor, MdDashboard, MdProductionQuantityLimits} from "react-icons/md";
import {FiSettings, FiUsers} from "react-icons/fi";
import {GiDeliveryDrone, GiHealthNormal, GiPlagueDoctorProfile} from "react-icons/gi";
import {ImStatsBars} from "react-icons/im";
import {IoMdNotificationsOutline} from "react-icons/io";
import {AiOutlineLogin} from "react-icons/ai";
import {BiLogOutCircle} from "react-icons/bi";
import {Link} from "react-router-dom";
import {ThemeContext} from "../../context/themeContext";


const Sidebar = () => {
    const {setDark} = useContext(ThemeContext);


    return (
        <div className='sidebar'>
            <div className="top">
                <Link to='/' style={{textDecoration: 'none'}}>
                    <div className="sidebar__logo">
                        admin-panel
                    </div>
                </Link>
            </div>
            <hr/>
            <div className="mid">
                <ul className='mid__list'>
                    <p className='mid__list-title'>Main</p>
                    <li className='mid__list-item'>
                        <MdDashboard className='mid__list-icon'/>
                        <span>Dashboard</span>
                    </li>
                    <p className='mid__list-title'>Lists</p>
                    <Link to='/users' style={{textDecoration: 'none'}}>
                        <li className='mid__list-item'>
                            <FiUsers className='mid__list-icon' />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to='/products' style={{textDecoration: 'none'}}>
                        <li className='mid__list-item'>
                            <MdProductionQuantityLimits className='mid__list-icon' />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li className='mid__list-item'>
                        <MdBorderColor className='mid__list-icon' />
                        <span>Orders</span>
                    </li>
                    <li className='mid__list-item'>
                        <GiDeliveryDrone className='mid__list-icon' />
                        <span>Delivery</span>
                    </li>
                    <p className='mid__list-title'>Useful</p>
                    <li className='mid__list-item'>
                        <ImStatsBars className='mid__list-icon' />
                        <span>Stats</span>
                    </li>
                    <li className='mid__list-item'>
                        <IoMdNotificationsOutline className='mid__list-icon' />
                        <span>Notifications</span>
                    </li>
                    <p className='mid__list-title'>Service</p>
                    <li className='mid__list-item'>
                        <GiHealthNormal className='mid__list-icon' />
                        <span>System Health</span>
                    </li>
                    <li className='mid__list-item'>
                        <AiOutlineLogin className='mid__list-icon' />
                        <span>Logs</span>
                    </li>
                    <li className='mid__list-item'>
                        <FiSettings className='mid__list-icon' />
                        <span>Settings</span>
                    </li>
                    <p className='mid__list-title'>User</p>
                    <li className='mid__list-item'>
                        <GiPlagueDoctorProfile className='mid__list-icon' />
                        <span>Profile</span>
                    </li>
                    <li className='mid__list-item'>
                        <BiLogOutCircle className='mid__list-icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <p className='mid__list-title'>Theme</p>
            <div className="bottom">
                <span
                    className='bottom__item'
                    onClick={() => setDark(true)}
                ></span>
                <span
                    className='bottom__item'
                    onClick={() => setDark(false)}
                ></span>
            </div>
        </div>
    );
};

export default Sidebar;
