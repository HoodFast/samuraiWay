import {propsUsersType} from "components/Users/UsersContainer";
import {usersAPI} from "api/api";
import {ThunkAction} from "redux-thunk";
import {AppStateType} from "./redux-store";
import {Dispatch} from "react";
import {updateObjectInArray} from "utils/object-helpers";


const FOLLOW = 'users/FOLLOW'
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET-USERS';
const SET_CURRENT_PAGE = 'users/SET-CURRENT-PAGE';
const TOTAL_USERS_COUNT = 'users/TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = 'users/IS-FETCHING'
const TOGGLE_IS_PROGRESS = 'users/TOGGLE-IS-PROGRESS'


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
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.payload.userId, 'id', {followed: false})
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
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        setCurrentPage(currentPage);
        const res = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(res.items))
        dispatch(setCurrentPage(currentPage))
        dispatch(setIsFetching(false))
    }
}


export const followUnfollowFlow = async (actionCreator: (userId) => followACType | unfollowACType,
                                         apiMethod: (userId: number) => Promise<ResponseType>,
                                         dispatch: Dispatch<mainType>,
                                         userId: number) => {
    dispatch(toggleFollowingProgress(true, userId))

    const res = await apiMethod(userId)

    if (res.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))

}

export const follow = (userId: number): getUsersThunkType => {
    return async (dispatch) => {
        await followUnfollowFlow(followSuccess, usersAPI.getFollow.bind(userId), dispatch, userId)
    }
}

export const unfollow = (userId: number): getUsersThunkType => {
    return async (dispatch) => {
       await followUnfollowFlow(unfollowSuccess, usersAPI.unFollow.bind(userId), dispatch, userId)
    }
}


export type ResponseType<T = {}> = {
    data: T
    fieldsErrors: string[]
    messages: string[]
    resultCode: ResultCode
}

export enum ResultCode {
    Success = 0,
    Error = 1,
    Captcha = 10
}