import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow,
    userPageType
} from "Redux/user-reducer";
import {AppStateType} from "Redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersReselect
} from "Redux/users-selectors";


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
    setCurrentPage: (pageId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type UsersPropsTypePresent = userPageType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsTypePresent> {

    componentDidMount() {
        let {currentPage, pageSize, getUsers} = this.props
        getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageId: number) => {
        let {getUsers, pageSize} = this.props
        getUsers(pageId, pageSize);
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
                followingInProgress={this.props.followingInProgress}
            />
        </>

    }
}


const mapStateToProps = (state: AppStateType): userPageType => {
    return {
        users: getUsersReselect(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}


const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers
    })
)(UsersAPIComponent)

export default UsersContainer