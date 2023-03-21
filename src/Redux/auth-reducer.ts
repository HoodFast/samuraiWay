import {meAPI} from "../api/api";

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const SET_USER_DATA = 'SET-USER-DATA'
export type authMeThunkType=ThunkAction<void, AppStateType, any, mainType>

export type authUserType = {
    id:number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

let init: authUserType = {
    id:null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = init, action: mainType): authUserType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

type mainType =
    followACType


type followACType = ReturnType<typeof setAuth>


export const setAuth = (data:any) => {
    return ({type: SET_USER_DATA, payload: {...data}} as const)
}


export const getMe = ():authMeThunkType => {
    return (dispatch) => {
        meAPI.getMe().then((data)=>{
            dispatch(setAuth(data))
            }
        )
    }
}