import {authType, meAPI, usersAPI} from "../api/api";

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "react";


const SET_USER_DATA = 'SET-USER-DATA'
export type authMeThunkType = ThunkAction<void, AppStateType, any, mainType>

export type authUserType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
}

let init: authUserType = {
    id: null,
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


export const setAuth = (id: number, login: string, email: string) => {
    return ({type: SET_USER_DATA, payload: {id, login, email}} as const)
}


export const getMe = (): authMeThunkType => {
    return (dispatch) => {
        meAPI.getMe().then((data) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuth(id, login, email))
                }
            }
        )
    }
}


type formType = {
    email: string,
    password: string,
    checked?: []
}
export const authMe = (value) => {

    return (dispatch: Dispatch<mainType>,getState:AppStateType) => {

        usersAPI.postLogin(value).then((data) => {
            dispatch(setAuth(data.data.userId, getState.auth.login?getState.auth.login:"none", getState.auth.email?getState.auth.email:"none"))
        }).catch((data) => console.log(data))
    }
}

export const logout = () => {
    return () => {
        usersAPI.logoutMe().then((data) => {

        })
    }
}