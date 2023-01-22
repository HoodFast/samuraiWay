import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogType, messageType} from "../../index";

type dialogsPropsStateType ={
    state:dialogsPropsType
}

type dialogsPropsType ={
    dialogs:Array<dialogType>
    messages:Array<messageType>
}






export const Dialogs = (props:dialogsPropsStateType) => {
    const dialogsDataMap = props.state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const messageDataMap = props.state.messages.map(message => <Message key={message.id} message={message.message}/>)
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsDataMap}
            </div>
            <div className={s.messages}>
                {messageDataMap}
            </div>
        </div>
    )
}