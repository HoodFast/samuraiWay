import {propsUsersType} from "../components/Users/UsersContainer";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'IS-FETCHING'


export type userPageType = {
    users: propsUsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

let init: userPageType = {
    users: [],
    pageSize: 2,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false
}

export const userReducer = (state = init, action: mainType): userPageType => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: true} : el)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(el => el.id === action.payload.userId ? {...el, followed: false} : el)
            }
        case SET_USERS:
            return {...state, users: [...action.payload.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.payload.pageId}
        case TOTAL_USERS_COUNT:
            console.log(action)
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            console.log(action)
            return {...state, isFetching: action.payload.fetching}
        default:
            return state
    }
}

type mainType =
    followACType |
    unfollowACType |
    setUsersACACType |
    setCurrentPageACType |
    totalUsersCountACType |
    setIsFetchingACType

type followACType = ReturnType<typeof followAC>
type unfollowACType = ReturnType<typeof unfollowAC>
type setUsersACACType = ReturnType<typeof setUsersAC>
type setCurrentPageACType = ReturnType<typeof setCurrentPageAC>
type totalUsersCountACType = ReturnType<typeof setTotalUsersCountAC>
type setIsFetchingACType = ReturnType<typeof setIsFetchingAC>


export const followAC = (userId: number) => ({type: FOLLOW, payload: {userId}} as const)
export const unfollowAC = (userId: number) => ({type: UNFOLLOW, payload: {userId}} as const)
export const setUsersAC = (users: propsUsersType[]) => ({type: SET_USERS, payload: {users}} as const)
export const setCurrentPageAC = (pageId: number) => ({type: SET_CURRENT_PAGE, payload: {pageId}} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: TOTAL_USERS_COUNT, payload: {totalUsersCount}} as const)
export const setIsFetchingAC = (fetching:boolean) => ({type: TOGGLE_IS_FETCHING, payload: {fetching}} as const)
