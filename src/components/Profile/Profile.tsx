import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../App";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";






type PropsProfileType = {
    dispatch: any
    store:any
}

export const Profile = (props: PropsProfileType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                store={props.store}
            />
        </div>
    )
}