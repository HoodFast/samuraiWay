import {v1} from "uuid";
import {postType} from "../App";
import {profileAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';


export type profileThunkType = ThunkAction<void, AppStateType, any, mainType>

export type propsProfileType =
    {
        userId: number
        lookingForAJob: boolean
        lookingForAJobDescription: string
        fullName: string
        contacts: {
            github: string
            vk: string
            facebook: string
            instagram: string
            twitter: string
            website: string
            youtube: string
            mainLink: string
        }

        photos: {
            small: string
            large: string
        }
    }


export type profilePageType = {
    posts: postType[]
    newPostText:string
    profile:propsProfileType|null
}

let init: profilePageType = {
    posts: [
        {id: v1(), message: "hi are you", likesCount: 12},
        {id: v1(), message: "is my post", likesCount: 1},
        {id: v1(), message: "hello world", likesCount: 5},
    ],
    newPostText: "",
    profile:null
}

export const profileReducer = (state = init, action: mainType) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: state.newPostText, likesCount: 0}
            state.newPostText = ""
            return {...state, posts: [...state.posts, newPost]}
        case UPDATE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state,profile:action.payload.profile}
        default:
            return state
    }
}

type mainType = addPostActionCreatorType | updateNewPostTextCreatorType | setUserProfileType

type addPostActionCreatorType = ReturnType<typeof addPost>
type updateNewPostTextCreatorType = ReturnType<typeof updateNewPost>
type setUserProfileType = ReturnType<typeof setUserProfile>


export const addPost = () => ({type: ADD_POST} as const)
export const updateNewPost = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const)
export const setUserProfile = (profile: propsProfileType) => ({type: SET_USER_PROFILE, payload: {profile}} as const)


export const getProfile=(profileId:number):profileThunkType=>{
    return (dispatch)=>{
        profileAPI.getProfile(profileId).then(
            (data)=>{
                if(data.userId){
                    dispatch(setUserProfile(data))
                }
            }
        )
    }
}

