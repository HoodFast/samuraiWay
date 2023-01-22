import {dialogType, messageType, postType} from "../index";


export type stateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
type profilePageType = {
    posts: Array<postType>

}
type dialogsPageType={
    messages:Array<messageType>
    dialogs: Array<dialogType>
}

export let state: stateType = {
    profilePage: {
        posts: [
            {id: 1, message: "hi are you", likesCount: 12},
            {id: 2, message: "is my post", likesCount: 1},
            {id: 3, message: "hellow world", likesCount: 5},
        ],

    },
    dialogsPage: {
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Hellow"},
            {id: 3, message: "How are you?"},
        ],
        dialogs: [
            {id: 1, name: "Vitalya"},
            {id: 2, name: "Dron"},
            {id: 3, name: "Sveta"},
        ],
    },
}
