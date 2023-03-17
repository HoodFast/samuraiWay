import React from "react";
import {addPost, updateNewPost} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";





const mapStateToProps=(state:AppStateType)=>{
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}


export const MyPostsContainer = connect(mapStateToProps, {updateNewPost,addPost}) (MyPosts);