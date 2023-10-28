import {TextField, textFieldPropsType} from "./TextField";
import {Control, FieldPath, FieldValues, useController} from "react-hook-form";


export type ControlledTextFieldType<T extends FieldValues> = {
    control: Control<T>
    name: FieldPath<T>
} & Omit<textFieldPropsType, 'onChange' | 'value' | 'id'>
export const ControlledTextField = <T extends FieldValues>({
                                                               control,
                                                               name,
                                                               ...restProps
                                                           }: ControlledTextFieldType<T>) => {
    const {
        field,
        fieldState: {error},
    } = useController({control, name})

    return <TextField {...field} errorMessage={error?.message} id={name} {...restProps} />
}
