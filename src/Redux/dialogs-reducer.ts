import {v1} from "uuid";

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
        case SEND_MESSAGE:
            const newMessage = {id: v1(), message: action.payload.message}
            return {...state, messages: [...state.messages, newMessage]};
        default:
            return state;
    }
}


type mainType = addNewMessageTextType

type addNewMessageTextType = ReturnType<typeof addNewMessageTextCreator>

export const addNewMessageTextCreator = (message: string) => ({type: SEND_MESSAGE, payload: {message}} as const)
