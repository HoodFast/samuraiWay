import {v1} from "uuid";
import {profilePageType} from "../App";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let init:profilePageType = {
    posts: [
        {id: v1(), message: "hi are you", likesCount: 12},
        {id: v1(), message: "is my post", likesCount: 1},
        {id: v1(), message: "hello world", likesCount: 5},
    ],
    newPostText: ""
}

export const profileReducer = (state=init, action: mainType) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            state.newPostText = ""
            return {...state,posts:[...state.posts,newPost]}
        case UPDATE_NEW_POST_TEXT:
            return {...state,newPostText:action.newText}
        default:
            return state
    }
}

type mainType = addPostActionCreatorType | updateNewPostTextCreatorType

type addPostActionCreatorType=ReturnType<typeof addPostActionCreator>
type updateNewPostTextCreatorType=ReturnType<typeof updateNewPostTextCreator>



export const addPostActionCreator = () => ({type: ADD_POST}as const)
export const updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text}as const)