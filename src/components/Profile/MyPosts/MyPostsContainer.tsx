import React from "react";
import {addPostActionCreator, updateNewPostTextCreator} from "../../../Redux/profile-reducer";
import {MyPosts} from "./MyPosts";




type MyPostContainerPropsType = {
    store: any
}


export const MyPostsContainer = (props: MyPostContainerPropsType) => {
    const updateNewPostText = (text:string) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action)
    }
    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
let state = props.store.getState()
    console.log(state)
    return (
        <MyPosts posts={state.profilePage.posts} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText} addPost={addPost}/>
    )
}