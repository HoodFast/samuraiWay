import React, {FC} from "react";
import {propsProfileType} from "../../../../Redux/profile-reducer";
import {ControlledTextField} from "../../../FormHelpers/textField/ControlTextField";
import {Controller, useFieldArray, useForm} from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";
import {ControlledCheckbox} from "../../../FormHelpers/checkBox/ControlCheckBox";
import s from './ProfileDataForm.module.scss'

type ProfileDataFormType = {
    profile: propsProfileType
    saveProfile: (profile: propsProfileType, setEditMode) => void
    setEditMode: (value: boolean) => void
}
type FormValues = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    github: string
    vk: string
    contacts?: {
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
const schema = z.object({
    fullName: z.string().min(6),
    lookingForAJob: z.boolean().optional(),
    lookingForAJobDescription: z.string().min(6),
    aboutMe: z.string().min(6),
})

// type FormValues = z.input<typeof schema>
export const ProfileDataForm: FC<ProfileDataFormType> = ({profile, saveProfile, setEditMode}) => {
    const {
        register,
        handleSubmit,
        control,
    } = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe,
        },
    })
    const { fields } = useFieldArray({
        control,
        name: "contacts"
    });

    const onSubmit = (data: FormValues) => {
        saveProfile({...data}, setEditMode)
        setEditMode(false)
    }

    return <form onSubmit={handleSubmit(onSubmit)}>
        <button type={'submit'}>Submit
        </button>
        <div className={s.name}>
            <h3 className={s.field}>Имя пользователя:</h3> <ControlledTextField control={control}
                                                                                name={'fullName'}/>
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
                                                                        name={'aboutMe'}/>
        </div>

        <div>
            <b>Contacts:</b>
            {fields.map((field, index)=>{
                <Controller
                    as={<input />}
                    name={`contacts.${index}`}
                    control={control}
                />
        })}
        </div>
    </form>
}

const contactSchema = z.object({
    contact: z.string().min(6),
})

type contactValues = z.input<typeof contactSchema>

