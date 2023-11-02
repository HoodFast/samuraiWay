import React from "react";
import {Profile} from "./Profile";
import {AppStateType} from "Redux/redux-store";
import {connect} from "react-redux";
import {
    getProfile,
    getStatus,
    propsProfileType,
    setUserProfile,
    updateStatus,
    updatePhoto,
    savePhoto, saveProfile, setEditMode
} from "Redux/profile-reducer";
import {useParams} from 'react-router-dom';
import {postType} from "App";
import {compose} from "redux";


type profilePropsType = {
    posts: postType[]
    newPostText: string
    profile: propsProfileType | null
    isAuth: boolean
    status: string
    authorisedUserId: number
}

type DispatchToPropsType = {
    getProfile: (profileId: number) => void
    getStatus: (profileId: number) => void
    clean: () => void
}

export type ProfilePropsTypePresent = profilePropsType & DispatchToPropsType

export function withRouter(ProfileAPIContainer) {
    return (props) => {
        const match = {params: useParams()};
        return <ProfileAPIContainer {...props} match={match}/>
    }
}

export class ProfileAPIContainer extends React.Component<ProfilePropsTypePresent> {
    refreshProfile() {
        // @ts-ignore
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authorisedUserId
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<ProfilePropsTypePresent>, prevState: Readonly<{}>, snapshot?: any) {

        // @ts-ignore
        if (this.props.match.params.userId != prevProps.match.params.userId) {

            this.refreshProfile()
        }
    }


    render() {


        // @ts-ignore
        return <Profile {...this.props} isOwner={!this.props.match.params.userId} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorisedUserId: state.auth.id,
        editMode:state.profilePage.editMode
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    connect(mapStateToProps, {
        setUserProfile,
        getProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile,
        setEditMode
    }),

    withRouter
)(ProfileAPIContainer)


