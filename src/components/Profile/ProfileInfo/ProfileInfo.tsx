import React, {ChangeEvent, useState} from "react";
import s from './ProfileInfo.module.css'
import {propsProfileType} from "Redux/profile-reducer";
import {Preloader} from "../../common/preloader/Preloader";
import yes from '../../../assets/yes.jpg'
import no from '../../../assets/no.jpg'
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm";



type profileInfoProps = {
    isOwner: boolean
    profile: propsProfileType
    status: string
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
}

export const ProfileInfo: React.FC<profileInfoProps> = ({
                                                            savePhoto,
                                                            isOwner,
                                                            profile,
                                                            status,
                                                            updateStatus,
                                                        }) => {
    let [editMode, setEditMode] = useState<boolean>(false)

    if (!profile) {
        return <Preloader isFetching={true}/>
    }
    const mainPhotoSelect = (e: ChangeEvent<HTMLInputElement>) => {
        if (!!e.target.files) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <>

            <div className={s.descriptionBlock}>
                <img className={s.mainPhoto}
                     src={profile.photos.large || 'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'}/>
                {isOwner && <input type={"file"} onChange={mainPhotoSelect}/>}
            </div>
            {editMode ? <ProfileDataForm profile={profile}/> :
                <ProfileData profile={profile} setEditMode={setEditMode} editMode={editMode} isOwner={isOwner}/>

            }
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
        </>
    )
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}


type ProfileDataType = {
    profile: propsProfileType
    isOwner?: boolean
    editMode: boolean
    setEditMode: (value: boolean) => void

}

const ProfileData: React.FC<ProfileDataType> = ({profile, isOwner=false, editMode, setEditMode}) => {
    let fName = profile.fullName

    return (
        <div>
            <div>{!editMode && isOwner && <button onClick={() => setEditMode(true)}>EditMode</button>}</div>
            <h3>
                Имя пользователя: {fName}
            </h3>


            <div>
                <b>В активном поиске работы:</b> <img style={{width: 40}} src={profile.lookingForAJob ? yes : no}/>
            </div>
            <div>
                <b>About me:</b> {profile.aboutMe}
            </div>
            {profile.lookingForAJob &&
                <div>
                    <b>My skills:</b> {profile.lookingForAJobDescription}
                </div>
            }

            <span>Контакты {fName}:</span>{Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}

        </div>
    )

}


