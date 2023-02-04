
import {v1} from "uuid";
import {rerenderEntreThree} from "../render";


export type messageType={
    id:string
    message:string
}
export type dialogType = {
    id: string
    name: string
}
export type postType={
    id: string
    message:string
    likesCount:number
}

export type stateType = {
    sidebar:navbarBlockType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type navbarType={
    id:string
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
            {id:v1(), friendsName:"Vova", avatar:'https://sun9-77.userapi.com/impg/guiypknBMCLuAUeA1X1OCqTBbz61pcKRxtG2wQ/b2C07lST1uo.jpg?size=1000x1000&quality=96&sign=d4e564d3d5b878ced4a81779d606bc51&c_uniq_tag=Cn5J_-uz-02mP4yl1OSf56GPBzVpqdihdQmglRHIxxI&type=album'},
            {id:v1(), friendsName:"Sveta", avatar:'https://pixelbox.ru/wp-content/uploads/2021/02/mult-ava-instagram-58.jpg'},
            {id:v1(), friendsName:"Fill", avatar:'https://abrakadabra.fun/uploads/posts/2021-12/thumbs/1639946157_16-abrakadabra-fun-p-prikolnie-avi-v-standoff-16.jpg'},
        ]
    },

    profilePage: {
        posts: [
            {id: v1(), message: "hi are you", likesCount: 12},
            {id: v1(), message: "is my post", likesCount: 1},
            {id: v1(), message: "hellow world", likesCount: 5},
        ],

    },
    dialogsPage: {
        messages: [
            {id: v1(), message: "Hi"},
            {id: v1(), message: "Hellow"},
            {id: v1(), message: "How are you?"},
        ],
        dialogs: [
            {id: v1(), name: "Vitalya"},
            {id: v1(), name: "Dron"},
            {id: v1(), name: "Sveta"},
        ],
    },
}

export const addPost = (postMessage:string)=>{
    if(postMessage.trim().length===0){
        return
    }
    let newPost = {id:v1(),message:postMessage,likesCount:0}
    state.profilePage.posts.push(newPost)
    rerenderEntreThree(state)
}