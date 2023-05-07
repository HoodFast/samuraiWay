import React from "react";
import s from './ProfileInfo.module.css'
import {propsProfileType} from "../../../Redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import yes from'../../../assets/yes.jpg'
import no from'../../../assets/no.jpg'
import {ProfileStatus} from "./ProfileStatus";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type profileInfoProps = {
    profile: propsProfileType
    status:string
    updateStatus:(status:string)=>void
}

export const ProfileInfo = (props: profileInfoProps) => {
    if(!props.profile){
        return <Preloader isFetching={true}/>
    }
    let fName = props.profile.fullName


    return (
        <>
            <h3>
                Имя пользователя: {fName}
            </h3>
            <div>
                {/*<img src='https://img2.akspic.ru/attachments/crops/0/7/6/9/39670/39670-ekstremalnyj_vid_sporta-Vozdushnyy_sharik-polety_na_vozdushnom_share-turizm-gora-3840x2160.jpg'/>*/}
            </div>
            {/*// @ts-ignore*/}
            <ProfileStatusWithHooks updateStatus={props.updateStatus}/>
            <div>
                В активном поиске работы: <img style={{width: 40}} src={props.profile.lookingForAJob? yes:no} />
            </div>
            <span>Контакты {fName}:</span>
            <div>
                <p>{props.profile.contacts.facebook}</p>
                <p>{props.profile.contacts.github}</p>
                <p>{props.profile.contacts.vk}</p>
                <p>{props.profile.contacts.instagram}</p>
                <p>{props.profile.contacts.twitter}</p>
                <p>{props.profile.contacts.website}</p>
                <p>{props.profile.contacts.youtube}</p>
            </div>


            <div className={s.descriptionBlock}>
                <img src={ props.profile.photos.large }/>
            </div>
        </>
    )
}