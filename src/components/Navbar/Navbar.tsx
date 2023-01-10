import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";


export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.activ}`}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                                             to="/profile">Profile</NavLink></div>
            <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                             to="/dialogs">Messages</NavLink></div>
            <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                             to="/news">News</NavLink></div>
            <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                             to="/music">Music</NavLink></div>
            <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                             to="/settings">Settings</NavLink></div>
        </nav>
    )
}