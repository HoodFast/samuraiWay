import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    userPageType
} from "../../Redux/user-reducer";
import {AppStateType} from "../../Redux/redux-store";
import React from "react";
import {Users} from "./Users";
import axios from "axios"
import {Preloader} from "../common/preloader/Preloader";


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
    setCurrentPage: (pageId: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    setIsFetching: (fetching: boolean) => void
}

export type UsersPropsTypePresent = userPageType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsTypePresent> {

    componentDidMount() {

        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(
            response => {

                this.props.setUsers(response.data.items)

                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (pageId: number) => {

        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageId);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageId}&count=${this.props.pageSize}`).then(
            response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

                this.props.setIsFetching(false)
            })

    }

    render() {
        return <>

            {this.props.isFetching ? <Preloader isFetching={this.props.isFetching}/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                isFetching={this.props.isFetching}
            />
        </>

    }
}

const mapStateToProps = (state: AppStateType): userPageType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}



export const UsersContainer = connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        setTotalUsersCount,
        setIsFetching
    })(UsersAPIComponent)