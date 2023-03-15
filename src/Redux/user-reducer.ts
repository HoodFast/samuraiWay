import {v1} from "uuid";
import {propsUsersType} from "../components/Users/UsersContainer";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT= 'TOTAL-USERS-COUNT';



export type userPageType = {
    users: propsUsersType[]
    pageSize:number
    totalUsersCount:number
    currentPage:number
}

let init:userPageType = {
    users: [],
    pageSize:2,
    totalUsersCount:50,
    currentPage:1
}

export const userReducer = (state=init, action: mainType):userPageType => {

    switch (action.type) {
        case FOLLOW:
            return {...state,users:state.users.map(el=> el.id===action.payload.userId? {...el,followed:true} :el)}
        case UNFOLLOW:
            return {...state,users:state.users.map(el=>el.id===action.payload.userId? {...el,followed:false} :el)}
        case SET_USERS:
            return {...state,users:[...action.payload.users]}
        case SET_CURRENT_PAGE:
            return {...state,currentPage:action.payload.pageId}
        case TOTAL_USERS_COUNT:
            return {...state,totalUsersCount:action.payload.totalUsersCount}
        default:
            return state
    }
}

type mainType = followACType | unfollowACType | setUsersACACType | setCurrentPageACType |totalUsersCountACType

type followACType=ReturnType<typeof followAC>
type unfollowACType=ReturnType<typeof unfollowAC>
type setUsersACACType=ReturnType<typeof setUsersAC>
type setCurrentPageACType=ReturnType<typeof setCurrentPageAC>
type totalUsersCountACType=ReturnType<typeof setTotalUsersCountAC>



export const followAC = (userId:number) => ({type: FOLLOW,payload:{userId}}as const)
export const unfollowAC = (userId:number) => ({type: UNFOLLOW,payload:{userId}}as const)
export const setUsersAC = (users:propsUsersType[]) => ({type: SET_USERS,payload:{users}}as const)
export const setCurrentPageAC=(pageId:number)=>({type:SET_CURRENT_PAGE,payload:{pageId:pageId}}as const)
export const setTotalUsersCountAC=(totalUsersCount:number)=>({type:TOTAL_USERS_COUNT,payload:{totalUsersCount}}as const)
