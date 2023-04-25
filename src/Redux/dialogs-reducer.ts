import {v1} from "uuid";


const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'ADD-MESSAGE'

type messageType = {
    id: string
    message: string
}

type dialogType = {
    id: string
    name: string
}

let init = {
    messages: [
        {id: v1(), message: "Hi"},
        {id: v1(), message: "Hellow"},
        {id: v1(), message: "How are you?"},
    ] as messageType[],
    newMessageBody: "",
    dialogs: [
        {id: v1(), name: "Vitalya"},
        {id: v1(), name: "Dron"},
        {id: v1(), name: "Sveta"},
    ] as dialogType[],
}

export type initialStateType = typeof init

export const dialogsReducer = (state: initialStateType = init, action: mainType
): initialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {...state, newMessageBody: action.newMessageBody};
        case SEND_MESSAGE:
            const newMessage = {id: v1(), message: state.newMessageBody}

            state.newMessageBody = ''
            return {...state, messages: [...state.messages, newMessage]};
        default:
            return state;
    }
}


type mainType = addNewMessageTextType | updateNewMessageCreatorType

type addNewMessageTextType = ReturnType<typeof addNewMessageTextCreator>
type updateNewMessageCreatorType = ReturnType<typeof updateNewMessageTextCreator>


export const updateNewMessageTextCreator = (text: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    newMessageBody: text
} as const)
export const addNewMessageTextCreator = () => ({type: SEND_MESSAGE} as const)
