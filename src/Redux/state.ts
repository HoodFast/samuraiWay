import {dialogType, messageType, postType} from "../index";
import {isNumberObject} from "util/types";


export type stateType = {
    sidebar:navbarBlockType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type navbarType={
    id:number
    friendsName:string
    avatar:string
}

export type navbarBlockType={
    friends:Array<navbarType>
}

type profilePageType = {
    posts: Array<postType>

}
type dialogsPageType={
    messages:Array<messageType>
    dialogs: Array<dialogType>
}

export let state: stateType = {
    sidebar: {
        friends: [
            {id:1, friendsName:"Vova", avatar:'https://sun9-77.userapi.com/impg/guiypknBMCLuAUeA1X1OCqTBbz61pcKRxtG2wQ/b2C07lST1uo.jpg?size=1000x1000&quality=96&sign=d4e564d3d5b878ced4a81779d606bc51&c_uniq_tag=Cn5J_-uz-02mP4yl1OSf56GPBzVpqdihdQmglRHIxxI&type=album'},
            {id:2, friendsName:"Sveta", avatar:'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'},
            {id:3, friendsName:"Fill", avatar:'https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg'},
        ]
    },
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
