import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";

import React, {ChangeEvent} from "react";
import {dialogsPageType} from "../../App";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {useDispatch} from "react-redux";
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";


type dialogsPropsStateType = {
    updateNewMessageBody: (body: string) => void
    addNewMessageText: () => void
    dialogsPage: dialogsPageType
    isAuth: boolean
}

interface values {
    textarea: string;
}

export const Dialogs = (props: dialogsPropsStateType) => {

    let state = props.dialogsPage
    const dialogsDataMap = state.dialogs.map(dialog => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id}/>)
    const messageDataMap = state.messages.map(message => <Message key={message.id} message={message.message}/>)
    const onSubmitHandler = (values) => {
        props.updateNewMessageBody(values.textarea)
        props.addNewMessageText()
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


type AddMessageFormType = {
    onSubmitHandler: (values:{textarea:string}) => void
}


export const AddMessageForm = (props: AddMessageFormType) => {
    return <Formik
        initialValues={{
            textarea: ''
        }}
        onSubmit={(values)=>props.onSubmitHandler(values)}
    >
        <Form>
            <label htmlFor="textarea">text</label>
            <Field id="textarea" name="textarea" placeholder="text"/>
            <button type="submit">send</button>
        </Form>
    </Formik>
}