import React from "react";
import s from './Header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://i.pinimg.com/originals/78/c5/dd/78c5dd9b98a54d9af000b8c797e8e584.png'/>
            <span> Социальная сеть </span>
        </header>
    )
}