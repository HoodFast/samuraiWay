import {TextField, textFieldPropsType} from "./TextField";
import {Control, FieldPath, FieldValues, useController} from "react-hook-form";
import {ElementType} from "react";


export type ControlledTextFieldType<T extends FieldValues> = {
    control: Control<T>
    name: FieldPath<T>
    as?:ElementType
} & Omit<textFieldPropsType, 'errorMessage' | 'id' | 'as'>
export const ControlledTextField = <T extends FieldValues>({
                                                               control,
                                                               name,
                                                               as,
                                                               ...restProps
                                                           }: ControlledTextFieldType<T>) => {
    const {
        field,
        fieldState: {error},
    } = useController({control, name})

    return <TextField {...field} as={as} errorMessage={error?.message} id={name} {...restProps} />
}



