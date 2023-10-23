import React, {ChangeEvent} from "react";
import s from './ProfileInfo.module.css'
import {propsProfileType} from "Redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import yes from '../../../assets/yes.jpg'
import no from '../../../assets/no.jpg'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type profileInfoProps = {
    isOwner: boolean
    profile: propsProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file:any)=>void
}

export const ProfileInfo: React.FC<profileInfoProps> = ({
                                                            savePhoto,
                                                            isOwner,
                                                            profile,
                                                            status,
                                                            updateStatus
                                                        }) => {
    if (!profile) {
        return <Preloader isFetching={true}/>
    }
    let fName = profile.fullName
    const mainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (!!e.target.files) {
            savePhoto(e.target.files[0])
        }
    }
    return (
        <>
            <h3>
                Имя пользователя: {fName}
            </h3>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div>
                В активном поиске работы: <img style={{width: 40}} src={profile.lookingForAJob ? yes : no}/>
            </div>
            <span>Контакты {fName}:</span>
            <div>
                <p>{profile.contacts.facebook}</p>
                <p>{profile.contacts.github}</p>
                <p>{profile.contacts.vk}</p>
                <p>{profile.contacts.instagram}</p>
                <p>{profile.contacts.twitter}</p>
                <p>{profile.contacts.website}</p>
                <p>{profile.contacts.youtube}</p>
            </div>


            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     src={profile.photos.large || 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'}/>
                {isOwner && <input type={"file"} onChange={mainPhotoSelect}/>}
            </div>
        </>
    )
}