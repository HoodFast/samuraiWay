import React from "react";
import s from './ProfileInfo.module.css'


export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img
                    src='https://img2.akspic.ru/attachments/crops/0/7/6/9/39670/39670-ekstremalnyj_vid_sporta-Vozdushnyy_sharik-polety_na_vozdushnom_share-turizm-gora-3840x2160.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                Ava + discription
            </div>
        </>
    )
}