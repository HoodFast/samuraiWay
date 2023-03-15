import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userPageType
} from "../../Redux/user-reducer";
import {AppStateType} from "../../Redux/redux-store";
import UsersC from "./UsersC";
import {Dispatch} from "redux";


export type propsUsersType = {
    name: string
    id: number
    uniqueUrlName: null
    photos: {
        small: string
        large: string
    }
    status: null
    followed: boolean
}



type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: propsUsersType[]) => void
    setCurrentPage: (pageId:number)=>void
    setTotalUsersCount: (totalUsersCount:number)=>void
}



export type UsersPropsTypePresent = userPageType & mapDispatchToPropsType


const mapStateToProps = (state:AppStateType):userPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount:state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsType => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage:(pageId)=>{
            dispatch(setCurrentPageAC(pageId))
        },
        setTotalUsersCount:(totalUsersCount)=>{
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)