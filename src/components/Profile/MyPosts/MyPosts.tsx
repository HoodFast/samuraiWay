import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";


export const MyPosts = () => {
    const postData=[
        {id:1,message:"hi are you", likesCount:12},
        {id:1,message:"is my post", likesCount:1},
        {id:1,message:"hellow world", likesCount:5},
    ]

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
                {postData.map(d=><Post message={d.message} likesCount={d.likesCount}/>)}
                {/*<Post message={postData[0].message} likesCount={12}/>*/}
                {/*<Post message="is my post" likesCount={3}/>*/}
            </div>
        </div>
    )
}