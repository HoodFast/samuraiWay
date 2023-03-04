import {v1} from "uuid";
import {propsUsersType} from "../components/Users/UsersContainer";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'

// type locationType = {
//     city:string
//     country:string
// }

// type userType = {
//     id:string
//     photoUrl:string
//     followed:boolean
//     fullName:string
//     status:string
//     location: locationType
// }
type userPageType = {
    users: propsUsersType[]
}

let init:userPageType = {
    users: [],
}

export const userReducer = (state=init, action: mainType):userPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state,users:state.users.map(el=> el.id===action.payload.userId? {...el,followed:true} :el)}
        case UNFOLLOW:
            return {...state,users:state.users.map(el=>el.id===action.payload.userId? {...el,followed:false} :el)}
        case SET_USERS:
            return {...state,users:[...state.users,...action.payload.users]}
        default:
            return state
    }
}

type mainType = followACType | unfollowACType | setUsersACACType

type followACType=ReturnType<typeof followAC>
type unfollowACType=ReturnType<typeof unfollowAC>
type setUsersACACType=ReturnType<typeof setUsersAC>



export const followAC = (userId:number) => ({type: FOLLOW,payload:{userId}}as const)
export const unfollowAC = (userId:number) => ({type: UNFOLLOW,payload:{userId}}as const)
export const setUsersAC = (users:propsUsersType[]) => ({type: SET_USERS,payload:{users}}as const)