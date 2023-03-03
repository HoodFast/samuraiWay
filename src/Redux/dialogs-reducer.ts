import {v1} from "uuid";
import {dialogsPageType} from "../App";
import {addPostActionCreator, updateNewPostTextCreator} from "./profile-reducer";

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

export const dialogsReducer = (state = init, action: mainType
) =>
{
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state,newMessageBody:action.newMessageBody};
        case SEND_MESSAGE:
            const newMessage = {id: v1(), message: state.newMessageBody}
            state.newMessageBody = ''
            return {...state,messages:[...state.messages,newMessage]};
        default:
            return state;
    }
}


type mainType = addNewMessageTextType | updateNewMessageCreatorType

type addNewMessageTextType=ReturnType<typeof addNewMessageTextCreator>
type updateNewMessageCreatorType=ReturnType<typeof updateNewMessageTextCreator>



export const updateNewMessageTextCreator = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, newMessageBody: text}as const)
export const addNewMessageTextCreator = () => ({type: SEND_MESSAGE}as const)
