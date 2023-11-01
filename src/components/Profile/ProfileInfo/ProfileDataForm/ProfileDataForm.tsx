import React, {FC} from "react";
import {propsProfileType} from "../../../../Redux/profile-reducer";
import {ControlledTextField} from "../../../FormHelpers/textField/ControlTextField";
import {useForm} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {ControlledCheckbox} from "../../../FormHelpers/checkBox/ControlCheckBox";
import s from './ProfileDataForm.module.scss'

type ProfileDataFormType = {
    profile: propsProfileType
    saveProfile: (profile: propsProfileType) => void
}

const schema = z.object({
    name: z.string().min(6),
    lookingForAJob: z.boolean().optional(),
    lookingForAJobDescription: z.string().min(6),
    aboutMe: z.string().min(6),
})

type FormValues = z.input<typeof schema>
export const ProfileDataForm: FC<ProfileDataFormType> = ({profile,saveProfile}) => {
    const {
        handleSubmit,
        control,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,

        },
    })
    const onSubmit = (data: FormValues) => {
        saveProfile({...data,fullName:profile.fullName})
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <button type={'submit'}>Submit
        </button>
        <div className={s.name}>
            <h3 className={s.field}>Имя пользователя:</h3> <ControlledTextField control={control}
                                                                                name={'name'}/><span>{profile.fullName}</span>
        </div>
        <div className={s.name}>
            <h3 className={s.field}>В активном поиске работы:</h3> <ControlledCheckbox control={control}
                                                                                       name={'lookingForAJob'}/>
        </div>
        <div className={s.name}>

            <h3 className={s.field}>My professional skills:</h3>
            <ControlledTextField
                control={control}
                name={'lookingForAJobDescription'}
                as={'textarea'}/>
        </div>
        <div className={s.name}>
            <h3 className={s.field}>About me:</h3> <ControlledTextField as={'textarea'} control={control}
                                                                        name={'aboutMe'}/>{profile.aboutMe}
        </div>
    </form>
}