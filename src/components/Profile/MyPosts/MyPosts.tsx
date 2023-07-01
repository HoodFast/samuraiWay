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


export class MyPosts extends React.Component<MyPostPropsType> {
    componentDidMount() {
        setTimeout(() => {
            this.setState({a: 12})
        }, 3000)
    }

    shouldComponentUpdate(nextProps: Readonly<MyPostPropsType>, nextState: any,): boolean {
        return nextProps != this.props || nextState != this.state
    }

    render() {
        console.log('render')
        const postElements = this.props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
        const addPost = (newPostText: string) => {
            this.props.addPost(newPostText)
        }

        return (
            <div className={s.postsBlock}>
                <h3>My posts</h3>
                <AddPostForm updateNewPost={this.props.updateNewPost} onSubmit={addPost}/>

                <div className={s.posts}>
                    {postElements}
                </div>
            </div>
        )
    }
}



