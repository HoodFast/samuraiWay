import {meAPI, securityAPI} from "api/api";

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "react";


const SET_USER_DATA = 'auth/SET-USER-DATA'
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL'

export type authMeThunkType = ThunkAction<void, AppStateType, any, mainType>

export type authUserType = {
    id: number | null,
    email: string | null,
    login: string | null
    isAuth: boolean
    captchaUrl: string | null
}

let init: authUserType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

export const authReducer = (state = init, action: mainType): authUserType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        case SET_CAPTCHA_URL:
            return {...state, captchaUrl: action.payload.captchaUrl}
        default:
            return state
    }
}

type mainType =
    followACType | captchaUrlType


type followACType = ReturnType<typeof setAuth>
type captchaUrlType = ReturnType<typeof setCaptchaUrl>

export const setAuth = (id: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return ({type: SET_USER_DATA, payload: {id, login, email, isAuth}} as const)
}

export const setCaptchaUrl = (captchaUrl: string) => {
    return ({type: SET_CAPTCHA_URL, payload: {captchaUrl}} as const)
}


export const getMe = (): authMeThunkType => {
    return async (dispatch) => {
        let res = await meAPI.getMe()
        if (res.resultCode === 0) {
            let {id, login, email} = res.data
            dispatch(setAuth(id, login, email, true))
        }
    }
}


export const login = (email: string, password: string, rememberMe: boolean,captcha:string, setFieldValue) => {
    return async (dispatch: Dispatch<mainType>) => {
        let res = await meAPI.login({email, password, rememberMe, captcha})
        if (res.data.resultCode === 0) {
            // @ts-ignore
            dispatch(getMe())
        } else {
            if(res.data.resultCode === 10){
                // @ts-ignore
                dispatch(getCaptchaUrl())
            }
            setFieldValue("error", res.data.messages.join(" "))
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: Dispatch<mainType>) => {
        let res = await securityAPI.getCaptchaUrl()
        const captchaUrl = res.data.url
        dispatch(setCaptchaUrl(captchaUrl))
    }
}


export const logout = () => {
    return async (dispatch: Dispatch<mainType>) => {
        let res = await meAPI.logout()
        if (res.data.resultCode === 0) {
            dispatch(setAuth(null, null, null, false))
        }
    }
}