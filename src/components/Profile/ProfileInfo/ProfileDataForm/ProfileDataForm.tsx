import React, {FC} from "react";
import {propsProfileType} from "../../../../Redux/profile-reducer";
import {ControlledTextField} from "../../../FormHelpers/textField/ControlTextField";
import {useForm} from "react-hook-form";
import { z } from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {ControlledCheckbox} from "../../../FormHelpers/checkBox/ControlCheckBox";
import s from './ProfileDataForm.module.scss'

type ProfileDataFormType={profile: propsProfileType}

const schema = z.object({
    name: z.string().min(6),
    lookingForAJob:z.boolean().optional(),
    aboutMe:z.string().min(6),
})

type FormValues = z.input<typeof schema>
export const ProfileDataForm:FC<ProfileDataFormType> = ({profile}) => {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            name: profile.fullName,
            lookingForAJob:profile.lookingForAJob,
            aboutMe:profile.aboutMe
        },
    })
    const onSubmit = (data: FormValues) => {
        console.log(data)
    }
    return <form onSubmit={handleSubmit(onSubmit)}>
         <button type={'submit'} onClick={() => {}}>Submit</button>
        <div className={s.name}>
            <h3 className={s.field}>Имя пользователя:</h3> <ControlledTextField control={control} name={'name'}/><span>{profile.fullName}</span>
        </div>
        <div className={s.name}>
            <h3 className={s.field}>В активном поиске работы:</h3> <ControlledCheckbox control={control} name={'lookingForAJob'}/>
        </div>
        <div className={s.name}>
            <h3 className={s.field}>About me:</h3> <ControlledTextField control={control} name={'aboutMe'}/>{profile.aboutMe}
        </div>
    </form>
}