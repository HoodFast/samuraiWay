import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/user-reducer";
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

type mapStateToPropsType = {
    users: propsUsersType[]
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: propsUsersType[]) => void
}



export type UsersPropsTypePresent = mapStateToPropsType & mapDispatchToPropsType


const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersC)