import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {HeaderPropsTypePresent} from "./HeaderContainer";
import {logout} from "../../Redux/auth-reducer";
import {useDispatch} from "react-redux";




export const Header = (props: HeaderPropsTypePresent) => {
    const HandlerLogout=()=>{
        props.logout()
    }
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/78/c5/dd/78c5dd9b98a54d9af000b8c797e8e584.png'/>
            <span> Социальная сеть </span>
            {props.id}
            <div className={s.loginBlock}>
                {props.isAuth ? <button onClick={HandlerLogout}>Logout</button>  : <NavLink to={'/login'}>Login</NavLink>}
                <div>
                    {props.login}
                    {props.email}
                </div>

            </div>
        </header>
    )
}