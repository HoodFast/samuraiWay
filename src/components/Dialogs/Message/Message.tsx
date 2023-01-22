import s from "../Dialogs.module.css";

type PropsMessage = {
    message: string
}

export const Message = (props: PropsMessage) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}