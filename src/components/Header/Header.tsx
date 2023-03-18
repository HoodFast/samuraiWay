import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsTypePresent} from "./HeaderContainer";


export const Header = (props: HeaderPropsTypePresent) => {

    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/78/c5/dd/78c5dd9b98a54d9af000b8c797e8e584.png'/>
            <span> Социальная сеть </span>
            {props.userId}
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
                <div>
                    {props.email}
                </div>

            </div>
        </header>
    )
}