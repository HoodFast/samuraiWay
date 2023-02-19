import {v1} from "uuid";
import {dialogsPageType} from "../App";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'ADD-MESSAGE'

let init:dialogsPageType = {
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Hellow"},
        {id: v1(), message: "How are you?"},
    ],
    newMessageBody: "",
    dialogs: [
        {id: v1(), name: "Vitalya"},
        {id: v1(), name: "Dron"},
        {id: v1(), name: "Sveta"},
    ],
}

export const dialogsReducer = (state = init, action: any
) =>
{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        case SEND_MESSAGE:
            state.messages.push({id: v1(), message: state.newMessageBody})
            state.newMessageBody = ''
            return state;
        default:
            return state;
    }
}

export const updateNewMessageTextCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text})
export const addNewMessageTextCreator = () => ({type: SEND_MESSAGE})
