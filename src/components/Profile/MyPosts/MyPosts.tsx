import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../App";
import {AddPostForm} from "./addPostForm/AddPostForm";


type MyPostPropsType = {
    posts: Array<postType>
    updateNewPost: (text: string) => void
    addPost: (postMessage: string) => void
}


export const MyPosts = (props: MyPostPropsType) => {
    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const addPost = (newPostText: string) => {
        props.addPost(newPostText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm updateNewPost={props.updateNewPost} onSubmit={addPost}/>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}


