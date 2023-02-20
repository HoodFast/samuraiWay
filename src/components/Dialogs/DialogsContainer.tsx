import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ChangeEvent} from "react";
import {dialogsPageType} from "../../App";
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";



type dialogsPropsStateType ={
    store: any
}


export const DialogsContainer = (props:dialogsPropsStateType) => {

    const updateNewMessageBody=(body:string)=>{
        let action = updateNewMessageTextCreator(body)
        props.store.dispatch(action)
    }
    const addNewMessageText = ()=>{
        props.store.dispatch(addNewMessageTextCreator())
    }
    let state = props.store.getState().dialogsPage

    return (
        <Dialogs
            updateNewMessageBody={updateNewMessageBody}
            addNewMessageText={addNewMessageText}
            dialogsPage={state}
        />
    )
}