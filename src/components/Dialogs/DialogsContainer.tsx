import s from './Dialogs.module.css'
import {Message} from "./Message/Message";
import {DialogItem} from "./DialogItem/DialogItem";
import {ChangeEvent} from "react";
import {dialogsPageType} from "../../App";
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from '../../storeContext';


// type dialogsPropsStateType = {
//     store: any
// }


export const DialogsContainer = () => {


    // let state = props.store.getState().dialogsPage

    return (
        <StoreContext.Consumer>
            {(store) => {
                const updateNewMessageBody = (body: string) => {
                    let action = updateNewMessageTextCreator(body)
                    store.dispatch(action)
                }
                const addNewMessageText = () => {
                    store.dispatch(addNewMessageTextCreator())
                }
                let state = store.getState().dialogsPage
                return <Dialogs
                    updateNewMessageBody={updateNewMessageBody}
                    addNewMessageText={addNewMessageText}
                    dialogsPage={state}
                />
            }}
        </StoreContext.Consumer>
    )
}