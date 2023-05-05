import {propsUsersType} from "../components/Users/UsersContainer";
import {usersAPI} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'IS-FETCHING'
const TOGGLE_IS_PROGRESS = 'TOGGLE-IS-PROGRESS'


export type getUsersThunkType = ThunkAction<void, AppStateType, any, mainType>


export type userPageType = {
    users: any
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}

let init: userPageType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 5000,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
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
            return {...state, totalUsersCount: action.payload.totalUsersCount}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.payload.isFetching}
        case TOGGLE_IS_PROGRESS:
            return {
                ...state, followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.followingInProgress]
                    : state.followingInProgress.filter(el => el !== action.payload.followingInProgress)
            }

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
    setIsFetchingACType |
    followingInProgressACType

type followACType = ReturnType<typeof followSuccess>
type unfollowACType = ReturnType<typeof unfollowSuccess>
type setUsersACACType = ReturnType<typeof setUsers>
type setCurrentPageACType = ReturnType<typeof setCurrentPage>
type totalUsersCountACType = ReturnType<typeof setTotalUsersCount>
type setIsFetchingACType = ReturnType<typeof setIsFetching>
type followingInProgressACType = ReturnType<typeof toggleFollowingProgress>


export const followSuccess = (userId: number) => ({type: FOLLOW, payload: {userId}} as const)
export const unfollowSuccess = (userId: number) => ({type: UNFOLLOW, payload: {userId}} as const)
export const setUsers = (users: propsUsersType[]) => ({type: SET_USERS, payload: {users}} as const)
export const setCurrentPage = (pageId: number) => ({type: SET_CURRENT_PAGE, payload: {pageId}} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: TOTAL_USERS_COUNT,
    payload: {totalUsersCount}
} as const)
export const setIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, payload: {isFetching}} as const)
export const toggleFollowingProgress = (isFetching: boolean, followingInProgress: number) => ({
    type: TOGGLE_IS_PROGRESS,
    payload: {followingInProgress, isFetching}
} as const)


export const getUsers = (currentPage: number, pageSize: number): getUsersThunkType => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        setCurrentPage(currentPage);
        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items))
            dispatch(setCurrentPage(currentPage))
            dispatch(setIsFetching(false))
        })
    }
}


export const follow = (userId: number): getUsersThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.getFollow(userId).then(
            data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollow = (userId: number): getUsersThunkType => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unFollow(userId).then(
            (data) => {
                if (data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}