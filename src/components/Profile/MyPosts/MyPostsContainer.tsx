import React from "react";
import {addPost} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";





const mapStateToProps=(state:AppStateType)=>{
    return{
        posts: state.profilePage.posts,
    }
}


export const MyPostsContainer = connect(mapStateToProps, {addPost}) (MyPosts);