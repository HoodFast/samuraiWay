import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message="hi are you" likesCount={12}/>
                <Post message="is my post" likesCount={3}/>
            </div>
        </div>
    )
}