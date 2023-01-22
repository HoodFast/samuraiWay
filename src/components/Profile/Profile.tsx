import React, {Component} from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {postType} from "../../index";

export type postsPropsType={
    posts:Array<postType>
}
type postsPropsStateType = {
    state:postsPropsType
}

export const Profile = (props:postsPropsStateType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}/>
        </div>
    )
}