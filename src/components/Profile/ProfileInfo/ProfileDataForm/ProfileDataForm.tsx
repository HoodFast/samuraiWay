import React, {FC} from "react";
import {propsProfileType} from "../../../../Redux/profile-reducer";
import {ControlledTextField} from "../../../FormHelpers/textField/ControlTextField";
import {useForm} from "react-hook-form";
import { z } from 'zod'
import {zodResolver} from "@hookform/resolvers/zod";


type ProfileDataFormType={profile: propsProfileType}

const schema = z.object({
    name: z.string()
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
            name: profile.fullName
        },
    })
    return <form>
         <button onClick={() => {}}>EditMode</button>
        <h3>
            Имя пользователя: <ControlledTextField control={control} name={'name'}/>{profile.fullName}
        </h3>

    </form>
}