import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {navbarBlockType} from "../../Redux/store";
import {FriendsBlock} from "./FriendsBlock/FriendsBlock";
import {Navbar} from "./Navbar";
import { StoreContext } from "../../storeContext";

// type navbarPropsType = {
//     store: any
// }

export const NavbarContainer = () => {
// let state = props.store.getState().sidebar
    return (
        <StoreContext.Consumer>{(store)=>{
            let state = store.getState().sidebar
            return <Navbar store={state}/>
        }}
            </StoreContext.Consumer>
    )
}