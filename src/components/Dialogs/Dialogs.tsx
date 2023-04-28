import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import React from "react";
import {dialogsPageType} from "../../App";
import {AddMessageForm} from "./addMessageForm/AddMessageForm";



type dialogsPropsStateType = {
    addNewMessageText: (message:string) => void
    dialogsPage: dialogsPageType
    isAuth: boolean
}


export const Dialogs = (props: dialogsPropsStateType) => {

    let state = props.dialogsPage
    const dialogsDataMap = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const messageDataMap = state.messages.map(message => <Message key={message.id} message={message.message}/>)
    const onSubmitHandler = (values: { textarea: string }) => {
        props.addNewMessageText(values.textarea)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsDataMap}
            </div>
            <div className={s.messages}>
                {messageDataMap}
            </div>
            <div>
                <AddMessageForm onSubmitHandler={onSubmitHandler}/>
            </div>
        </div>
    )
}


