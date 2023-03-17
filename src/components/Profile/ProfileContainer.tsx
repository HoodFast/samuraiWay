import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";
import {profilePageType, propsProfileType, setUserProfile} from "../../Redux/profile-reducer";




    type DispatchToPropsType = {
        setUserProfile:(data:propsProfileType)=>void
    }

    export type ProfilePropsTypePresent = profilePageType & DispatchToPropsType

export class ProfileAPIContainer extends React.Component<ProfilePropsTypePresent> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
            response => {


                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return <Profile {...this.props} />
    }
}

const mapStateToProps=(state:AppStateType)=>{
    return{
        posts:state.profilePage.posts,
        newPostText:state.profilePage.newPostText,
        profile:state.profilePage.profile
    }
}

export const ProfileContainer=connect(mapStateToProps,{setUserProfile})(ProfileAPIContainer)