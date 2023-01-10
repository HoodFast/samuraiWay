import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsDialogType = {
    id:number
    name:string
}
type PropsMessage = {
    message:string
}


const DialogItem = (props:PropsDialogType) => {
    let path = "/dialogs/"+ props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message=(props:PropsMessage)=>{
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Vitalya" id={1}/>
                <DialogItem name="Dron" id={2}/>
                <DialogItem name="Sveta" id={3}/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hellow"/>
                <Message message="How are you?"/>
            </div>
        </div>
    )
}