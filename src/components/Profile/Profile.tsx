import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postType} from "../../Redux/state";

export type postsPropsType = {
    posts: Array<postType>

}
type postsPropsStateType = {
    addPost: (postMessage:string) => void
    state: postsPropsType
}

export const Profile = (props: postsPropsStateType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost} posts={props.state.posts}/>
        </div>
    )
}