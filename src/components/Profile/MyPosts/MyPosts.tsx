import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postsPropsType} from "../Profile";




export const MyPosts = (props:postsPropsType) => {
    const postElements = props.posts.map(p=><Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div></div>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}