import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {getProfile, profilePageType, setUserProfile} from "../../Redux/profile-reducer";
import {useParams} from 'react-router-dom';

type DispatchToPropsType = {
    getProfile: (profileId:number) => void
}

export type ProfilePropsTypePresent = profilePageType & DispatchToPropsType

export function withRouter(ProfileAPIContainer) {
    return (props) => {
        const match = {params: useParams()};
        return <ProfileAPIContainer {...props} match={match}/>
    }
}

export class ProfileAPIContainer extends React.Component<ProfilePropsTypePresent> {

    componentDidMount() {
        // @ts-ignore
        let profileId = this.props.match.params.userId
        if (!profileId) {
            profileId = 2
        }
        this.props.getProfile(profileId)
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile,getProfile})(withRouter(ProfileAPIContainer))