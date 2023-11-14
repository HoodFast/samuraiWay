

import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";

import {getMe} from "./auth-reducer";


const SET_INITIALIZED = 'SET_INITIALIZED'
const SET_ERROR = 'SET_ERROR'
export type authMeThunkType = ThunkAction<void, AppStateType, any, mainType>

export type AppType = {
    initialized: boolean
    errorMessage:string
}

let init: AppType = {
    initialized: false,
    errorMessage:''
}

export const appReducer = (state = init, action: mainType): AppType => {

    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        case SET_ERROR:
            return {...state, errorMessage: action.payload.errorMessage}
        default:
            return state
    }
}

type mainType =
    initializedACType |
    setErrorMessageType


type initializedACType = ReturnType<typeof initializedSuccess>
export type setErrorMessageType = ReturnType<typeof setErrorMessage>

export const initializedSuccess = () => {
    return ({type: SET_INITIALIZED} as const)
}

export const setErrorMessage = (errorMessage:string)=>{
    return ({type:SET_ERROR,payload:{errorMessage}}as const)
}


export const initializeApp = (): authMeThunkType => {
    return (dispatch) => {
        const promise = dispatch(getMe())

        Promise.all([promise]).then(()=>{

            dispatch(initializedSuccess())
        })

    }
}


