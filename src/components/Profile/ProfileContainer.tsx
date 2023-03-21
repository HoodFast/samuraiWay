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
        this.props.getProfile(profileId)
        // if (!profileId) {
        //     profileId = 2
        // }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + profileId).then(
        //     response => {
        //
        //         this.props.setUserProfile(response.data)
        //     })
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