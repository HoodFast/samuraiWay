import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {navbarBlockType} from "../../Redux/store";
import {FriendsBlock} from "./FriendsBlock/FriendsBlock";

type navbarPropsType = {
    state: navbarBlockType
}

export const Navbar = (props: navbarPropsType) => {
    debugger
    return (
        <>
            <nav className={s.nav}>
                <div className={`${s.item} ${s.activ}`}><NavLink
                    className={navData => navData.isActive ? s.active : s.item}
                    to="/profile">Profile</NavLink></div>
                <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                                 to="/dialogs">Messages</NavLink></div>
                <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                                 to="/news">News</NavLink></div>
                <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                                 to="/music">Music</NavLink></div>
                <div className={s.item}><NavLink className={navData => navData.isActive ? s.active : s.item}
                                                 to="/settings">Settings</NavLink></div>

                <FriendsBlock friends={props.state.friends}/>
            </nav>


        </>
    )
}