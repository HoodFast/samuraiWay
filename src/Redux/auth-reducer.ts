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
            return {...state, ...action.payload}
        default:
            return state
    }
}

type mainType =
    followACType


type followACType = ReturnType<typeof setAuth>

export const setAuth = (id: number | null, login: string|null, email: string|null, isAuth: boolean) => {
    return ({type: SET_USER_DATA, payload: {id, login, email, isAuth}} as const)
}


export const getMe = (): authMeThunkType => {
    return (dispatch) => {
        return meAPI.getMe().then((data) => {
                if (data.resultCode === 0) {
                    let {id, login, email} = data.data
                    dispatch(setAuth(id, login, email, true))
                }
            }
        )
    }
}



export const login = (email: string, password: string, rememberMe: boolean,setFieldValue) => {
    return (dispatch: Dispatch<mainType>) => {
        meAPI.login({email, password, rememberMe, captcha: true}).then((response) => {

            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getMe())
            }else{
                setFieldValue("error", response.data.messages.join(" "))
            }
        })
    }
}

export const logout = () => {
    return (dispatch: Dispatch<mainType>) => {
        meAPI.logout().then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setAuth(null, null, null, false))
            }
        })
    }
}