import {connect} from "react-redux";
import {
    follow, getUsers,
    setCurrentPage,
    unfollow,
    userPageType
} from "../../Redux/user-reducer";
import {AppStateType} from "../../Redux/redux-store";
import React from "react";
import {Users} from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";



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
    getUsers:(currentPage:number, pageSize:number)=>void

}

export type UsersPropsTypePresent = userPageType & mapDispatchToPropsType

class UsersAPIComponent extends React.Component<UsersPropsTypePresent> {

    componentDidMount() {

        this.props.getUsers(this.props.currentPage,
            this.props.pageSize);
    }

    onPageChanged = (pageId: number) => {

        this.props.getUsers(pageId,
            this.props.pageSize);

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
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export const UsersContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        getUsers
    }),
    withAuthRedirect,
)(UsersAPIComponent)

// export const UsersContainers = withAuthRedirect(connect(mapStateToProps, {
//     follow,
//     unfollow,
//     setCurrentPage,
//     getUsers
// })(UsersAPIComponent))