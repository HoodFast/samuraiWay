import {ComponentPropsWithoutRef, ElementType} from 'react'


export type textFieldPropsType<T extends ElementType ='textarea'> = {
    as?: T
    placeholder?: string
    errorMessage?: string
    label?: string
    onValueChange?: (value: string) => void
} & ComponentPropsWithoutRef<T>

export const TextField = <T extends ElementType = 'input'>(props: textFieldPropsType<T> & Omit<ComponentPropsWithoutRef<T>,
    keyof textFieldPropsType<T>>) => {
    const Component = props.as || 'input'
    const {
        placeholder,
        errorMessage,
        label,
        onChange,
        value,
        onValueChange,
        component,
        ...rest
    } = props
    return (
        <>
            <label>

                <Component
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    {...rest}
                />

            </label>
            {errorMessage && <div>{errorMessage}</div>}
        </>
    )
}
