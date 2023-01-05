import React from "react";
import s from './Post.module.css'
type PostType = {
    message: string
    likesCount: number
}

export const Post = (props:PostType) => {
    return (
        <div className={s.item}>
            <img src='https://pixelbox.ru/wp-content/uploads/2021/03/ava-instagram-4.jpg'/>
            {props.message}
            <div>
                <span>Like</span> - {props.likesCount}
            </div>
        </div>
    )
}