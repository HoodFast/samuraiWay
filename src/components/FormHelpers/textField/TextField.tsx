import {ComponentPropsWithoutRef, FC,} from 'react'


export type textFieldPropsType = {
    placeholder?: string
    errorMessage?: string
    label?: string
    onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<'input'>

export const TextField: FC<textFieldPropsType> = ({
                                                            placeholder,
                                                            errorMessage,
                                                            label,
                                                            onChange,
                                                            value,
                                                            onValueChange,
                                                            ...rest
                                                        }) => {


    return (
        <div>
            <label>
                {label}
                <input
                    placeholder={placeholder}
                    type={'text'}
                    onChange={onChange}
                    value={value}
                    {...rest}
                />
                {errorMessage && <div>{errorMessage}</div>}
            </label>
        </div>
    )
}
