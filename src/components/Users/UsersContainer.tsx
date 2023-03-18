import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowing,
    unfollow,
    userPageType
} from "../../Redux/user-reducer";
import {AppStateType} from "../../Redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {usersAPI} from "../../api/api";


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
    toggleFollowing:(isFetching:boolean,value:number)=>void
}

export type UsersPropsTypePresent = userPageType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsTypePresent> {

    componentDidMount() {

        this.props.setIsFetching(true)
        usersAPI.getUsers(
            this.props.currentPage,
            this.props.pageSize
        ).then(
            data => {

                this.props.setUsers(data.items)
                this.props.setIsFetching(false)
            })
    }

    onPageChanged = (pageId: number) => {

        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageId);
        usersAPI.getUsers(pageId, this.props.pageSize).then(
            data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
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
                followingInProgress={this.props.followingInProgress}
                toggleFollowing={this.props.toggleFollowing}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    toggleFollowing
})(UsersAPIComponent)