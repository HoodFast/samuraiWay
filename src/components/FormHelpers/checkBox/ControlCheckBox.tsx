import { useController, UseControllerProps, FieldValues } from 'react-hook-form'
import {CheckBox, CheckboxPropsType} from "./CheckBox";


export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
    Omit<CheckboxPropsType, 'onChange' | 'value' | 'id'>

export const ControlledCheckbox = <T extends FieldValues>({
                                                              name,
                                                              control,
                                                              defaultValue,
                                                              ...checkboxProps
                                                          }: ControlledCheckboxProps<T>) => {
    const {
        field: { onChange, value },
    } = useController({
        name,
        control,
        defaultValue,
    })

    return (
        <CheckBox
            {...{
                onCheckedChange: onChange,
                checked: value,
                id: name,
                ...checkboxProps,
            }}
        />
    )
}
