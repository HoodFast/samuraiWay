import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {navbarBlockType} from "../../Redux/store";
import {FriendsBlock} from "./FriendsBlock/FriendsBlock";
import {Navbar} from "./Navbar";

type navbarPropsType = {
    store: any
}

export const NavbarContainer = (props: navbarPropsType) => {
let state = props.store.getState().sidebar
    return (
        <Navbar store={state}/>
    )
}