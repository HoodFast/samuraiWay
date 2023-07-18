import {v1} from "uuid";
import {postType} from "App";
import {profileAPI} from "api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = "SET_STATUS"
const REMOVE_POST = "REMOVE_POST"


export type profileThunkType = ThunkAction<void, AppStateType, any, mainType>
export type getStatusType = ThunkAction<void, string, any, mainType>

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
    profile: propsProfileType | null
    status: string
}

let init: profilePageType = {
    posts: [
        {id: v1(), message: "hi are you", likesCount: 12},
        {id: v1(), message: "is my post", likesCount: 1},
        {id: v1(), message: "hello world", likesCount: 5},
    ],
    profile: null,
    status: "new status"
}

export const profileReducer = (state = init, action: mainType): profilePageType => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: v1(), message: action.payload.newPost, likesCount: 0}
            return {...state, posts: [...state.posts, newPost]}

        case SET_USER_PROFILE:
            return {...state, profile: action.payload.profile}
        case SET_STATUS:
            return {...state, status: action.payload.status}
        case REMOVE_POST:
            return {...state, posts: state.posts.filter(i => i.id !== action.payload.id)}
        default:
            return state
    }
}

type mainType = addPostActionCreatorType | setUserProfileType | setStatusType | removePostType

type addPostActionCreatorType = ReturnType<typeof addPost>
type setUserProfileType = ReturnType<typeof setUserProfile>
type setStatusType = ReturnType<typeof setStatus>
type removePostType = ReturnType<typeof removePost>


export const addPost = (newPost: string) => ({type: ADD_POST, payload: {newPost}} as const)
export const setUserProfile = (profile: propsProfileType) => ({type: SET_USER_PROFILE, payload: {profile}} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, payload: {status}} as const)
export const removePost = (id: string) => ({type: REMOVE_POST, payload: {id}} as const)


export const getProfile = (profileId: number): profileThunkType => {
    return async (dispatch) => {
        const res = await profileAPI.getProfile(profileId)

        if (res.userId) {
            dispatch(setUserProfile(res))
        }

    }
}
export const getStatus = (profileId: number): profileThunkType => {
    return async (dispatch) => {
        const res = await profileAPI.getStatus(profileId)
        if (res.data) {
            dispatch(setStatus(res.data))
        } else {
            dispatch(setStatus("----"))
        }
    }
}

export const updateStatus = (status: string): profileThunkType => {
    return async (dispatch) => {
        const res = await profileAPI.updateStatus(status)
        if (res.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    }
}

