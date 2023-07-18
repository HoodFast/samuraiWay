import React from "react";
import s from './ProfileInfo.module.css'
import {propsProfileType} from "Redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import yes from '../../../assets/yes.jpg'
import no from '../../../assets/no.jpg'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";


type profileInfoProps = {
    profile: propsProfileType
    status: string
    updateStatus: (status: string) => void
}

export const ProfileInfo: React.FC<profileInfoProps> = ({
                                                            profile,
                                                            status,
                                                            updateStatus
                                                        }) => {
    if (!profile) {
        return <Preloader isFetching={true}/>
    }
    let fName = profile.fullName

    for (let key in profile.contacts) {
       return <p></p>
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
                <img src={profile.photos.large}/>
            </div>
        </>
    )
}