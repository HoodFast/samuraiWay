import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {savePhoto} from "../../Redux/profile-reducer";



export const Profile = (props) => {
    return (
        <div>
            <ProfileInfo saveProfile={props.saveProfile} savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer updateNewPost={props.updateNewPost}/>
        </div>
    )
}