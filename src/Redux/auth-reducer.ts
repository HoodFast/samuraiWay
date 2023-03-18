

const SET_USER_DATA = 'SET-USER-DATA'



export type authUserType = {
    userId: number| null,
    email: string|null,
    login: string|null
    isAuth: boolean
}

let init: authUserType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state = init, action: mainType): authUserType => {

    switch (action.type) {
        case SET_USER_DATA:
            return {...state,...action.payload,isAuth:true}
        default:
            return state
    }
}

type mainType =
    followACType


type followACType = ReturnType<typeof setAuth>




export const setAuth = (userId:number,email:string,login:string) => ({type: SET_USER_DATA, payload: {userId,email,login}} as const)

