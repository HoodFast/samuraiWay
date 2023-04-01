import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {getProfile, getStatus, propsProfileType, setUserProfile, updateStatus} from "../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {postType} from "../../App";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


type profilePropsType = {
    posts: postType[]
    newPostText: string
    profile: propsProfileType | null
    isAuth: boolean
    status: string
}

type DispatchToPropsType = {
    getProfile: (profileId: number) => void
    getStatus: (profileId: number) => void
}

export type ProfilePropsTypePresent = profilePropsType & DispatchToPropsType

export function withRouter(ProfileAPIContainer) {
    return (props) => {
        const match = {params: useParams()};
        return <ProfileAPIContainer {...props} match={match}/>
    }
}

export class ProfileAPIContainer extends React.Component<ProfilePropsTypePresent> {

    componentDidMount() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 28121
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

export const ProfileContainer = compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getStatus,
        updateStatus
    })
)(ProfileAPIContainer)


// const AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer)
//
//
// export const ProfileContainer = connect(mapStateToProps, {
//     setUserProfile,
//     getProfile
// })(withRouter(AuthRedirectComponent))


