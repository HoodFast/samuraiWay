import React, {ChangeEvent, useState} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../Redux/state";


type MyPostPropsType = {
    posts: Array<postType>
    addPost: (post:string) => void
}

export const MyPosts = (props: MyPostPropsType) => {
    const [post, setPost] = useState("")
    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    const textAreaHandler= (e:ChangeEvent<HTMLTextAreaElement>)=>{
        setPost(e.currentTarget.value)
    }
const addPost=()=>{
    props.addPost(post)
    setPost('')
}
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div></div>
            <div>
                <textarea value={post} onChange={textAreaHandler}></textarea>
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