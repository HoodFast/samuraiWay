import {authType, meAPI, usersAPI} from "../api/api";

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "react";
import {getMe} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'
export type authMeThunkType = ThunkAction<void, AppStateType, any, mainType>

export type AppType = {
    initialized: boolean
}

let init: AppType = {
    initialized: false
}

export const appReducer = (state = init, action: mainType): AppType => {

    switch (action.type) {
        case SET_INITIALIZED:

            return {...state, initialized: true}
        default:
            return state
    }
}

type mainType =
    initializedACType


type initializedACType = ReturnType<typeof initializedSuccess>

export const initializedSuccess = () => {
    return ({type: SET_INITIALIZED} as const)
}


export const initializeApp = (): authMeThunkType => {
    return (dispatch) => {
        const promise = dispatch(getMe())

        Promise.all([promise]).then(()=>{

            dispatch(initializedSuccess())
        })

    }
}


