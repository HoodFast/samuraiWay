import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div >
            <img
                src='https://img2.akspic.ru/attachments/crops/0/7/6/9/39670/39670-ekstremalnyj_vid_sporta-Vozdushnyy_sharik-polety_na_vozdushnom_share-turizm-gora-3840x2160.jpg'/>
            <div>
                Ava + discription
            </div>
            <MyPosts/>
        </div>
    )
}