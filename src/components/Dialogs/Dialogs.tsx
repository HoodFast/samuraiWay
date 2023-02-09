import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {dialogType, messageType} from "../../Redux/state";
import {ChangeEvent, useState} from "react";

type dialogsPropsStateType ={
    state:dialogsPropsType
}

type dialogsPropsType ={
    dialogs:Array<dialogType>
    messages:Array<messageType>
}


export const Dialogs = (props:dialogsPropsStateType) => {
    const[message,setMessage]=useState('')
    const textAreaHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        setMessage(e.currentTarget.value)
    }
    const sendHandler = ()=>{
        alert(message)
    }
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
            <textarea onChange={textAreaHandler}/>
            <button onClick={sendHandler}>send</button>
        </div>
    )
}