import {v1} from "uuid";
import {profilePageType} from "../App";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let init:profilePageType = {
    posts: [
        {id: v1(), message: "hi are you", likesCount: 12},
        {id: v1(), message: "is my post", likesCount: 1},
        {id: v1(), message: "hellow world", likesCount: 5},
    ],
    newPostText: ""
}

export const profileReducer = (state=init, action: any) => {
    switch (action.type) {
        case ADD_POST:
            let newPostText = state.newPostText

            let newPost = {id: v1(), message: newPostText, likesCount: 0}
            state.posts.push(newPost);
            state.newPostText = ""
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text})