import React, {useContext} from 'react';

import './Navbar.scss'
import {AiOutlineSearch, AiOutlineUnorderedList} from "react-icons/ai";
import {
    MdDarkMode,
    MdLanguage,
    MdOutlineChatBubbleOutline,
    MdOutlineDarkMode,
    MdOutlineNotificationsNone
} from "react-icons/md";
import {BiExitFullscreen} from "react-icons/bi";
import avatar from '../../static/img/291698.png'
import {ThemeContext} from "../../context/themeContext";

const Navbar = () => {
    const {dark, setDark} = useContext(ThemeContext);

    return (
        <div className='navbar__container'>
            <div className='navbar__left'>
                <input placeholder='Search...' type="text" className='navbar__left-input'/>
                <AiOutlineSearch className='navbar__left-icon'/>
            </div>
            <div className='navbar__right'>
                <div className='navbar__right-item'>
                    <MdLanguage />
                    <span>English</span>
                </div>
                <div
                    className='navbar__right-item'
                    onClick={() => setDark(!dark)}
                >
                    {dark ? <MdDarkMode /> : <MdOutlineDarkMode />}
                </div>
                <div className='navbar__right-item'>
                    <BiExitFullscreen />
                </div>
                <div className='navbar__right-item'>
                    <MdOutlineNotificationsNone />
                    <span className='notifications'>1</span>
                </div>
                <div className='navbar__right-item'>
                    <MdOutlineChatBubbleOutline />
                    <span className='notifications'>3</span>
                </div>
                <div className='navbar__right-item'>
                    <AiOutlineUnorderedList />
                </div>
                <div className='navbar__right-item'>
                    <img src={avatar} alt="avatar" width={30} height={30}/>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
