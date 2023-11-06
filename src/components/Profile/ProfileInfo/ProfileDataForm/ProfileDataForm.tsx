import React, {FC} from "react";
import {propsProfileType} from "../../../../Redux/profile-reducer";
import {ControlledTextField} from "../../../FormHelpers/textField/ControlTextField";
import {
    FormProvider,
    useForm,
} from "react-hook-form";
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
    contacts?: {
        github: string
        vk: string
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
    contacts:z.object({github: z.string().optional(),
        vk: z.string().optional(),
        facebook: z.string().optional(),
        instagram: z.string().optional(),
        twitter: z.string().optional(),
        website: z.string().optional(),
        youtube: z.string().optional(),
        mainLink: z.string().optional()})
})

// type FormValues = z.input<typeof schema>
export const ProfileDataForm: FC<ProfileDataFormType> = ({profile, saveProfile, setEditMode}) => {
    const methods = useForm<FormValues>({
        resolver: zodResolver(schema),
        defaultValues: {
            fullName: profile.fullName,
            lookingForAJob: profile.lookingForAJob,
            lookingForAJobDescription: profile.lookingForAJobDescription,
            aboutMe: profile.aboutMe
        },
    })
    const {control, handleSubmit, reset} = methods
    const onSubmit = (data: any) => {
        console.log(data)
        saveProfile({...data}, setEditMode)
        setEditMode(false)
    }



    return <FormProvider {...methods}>
        <button onClick={handleSubmit(onSubmit)}>Submit
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

            {profile.contacts && Object.keys(profile.contacts).map((field) => {
                // @ts-ignore
                return <div style={{margin:'10px'}} ><ControlledTextField style={{display:'flex', justifyContent:'space-around'}} label={field+":"} defaultValue={profile.contacts[field]} control={control} name={'contacts.'+field}/></div>

            })}
        </div>
    </FormProvider>
}
