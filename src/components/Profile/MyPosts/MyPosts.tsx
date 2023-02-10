import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../App";



type MyPostPropsType = {
    posts: Array<postType>
    newPostText:string
    dispatch:any
}

export const MyPosts = (props: MyPostPropsType) => {
    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const textAreaHandler= (e:ChangeEvent<HTMLTextAreaElement>)=>{
        props.updateNewPostText(e.currentTarget.value)
    }
const addPost=()=>{
    props.dispatch()
}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div></div>
            <div>
                <textarea value={props.newPostText} onChange={textAreaHandler} autoFocus></textarea>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}