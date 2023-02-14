import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

import {ChangeEvent} from "react";
import {dialogsPageType} from "../../App";
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";



type dialogsPropsStateType ={
    state:dialogsPageType
    dispatch: any
}


export const Dialogs = (props:dialogsPropsStateType) => {

    const textAreaHandler=(e:ChangeEvent<HTMLTextAreaElement>)=>{
        let action = updateNewMessageTextCreator(e.currentTarget.value)
        props.dispatch(action)
    }
    const sendHandler = ()=>{
        props.dispatch(addNewMessageTextCreator())
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
            <textarea value={props.state.newMessageBody} onChange={textAreaHandler} autoFocus/>
            <button onClick={sendHandler}>send</button>
        </div>
    )
}