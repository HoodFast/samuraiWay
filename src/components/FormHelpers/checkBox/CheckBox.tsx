import {ChangeEvent, ComponentPropsWithoutRef, FC} from 'react'


export type CheckboxPropsType = {
    id?: string
    label?: string
    checked?: boolean
    disabled?: boolean
    onCheckedChange?: (e: ChangeEvent<HTMLInputElement>) => void
} & ComponentPropsWithoutRef<'input'>
export const CheckBox: FC<CheckboxPropsType> = ({
                                                      id,
                                                      label,
                                                      checked,
                                                      disabled,
                                                      onCheckedChange,
                                                      ...rest
                                                  }) => {
    return (

            <input onChange={onCheckedChange}
                   checked={checked}
                   disabled={disabled}
                   {...rest} type="checkbox"/>
    )
}
