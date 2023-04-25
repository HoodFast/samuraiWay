import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {postType} from "../../../App";
import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../../Redux/dialogs-reducer";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";


type MyPostPropsType = {
    posts: Array<postType>
    newPostText: string
    updateNewPost: (text: string) => void
    addPost: () => void
}


export const MyPosts = (props: MyPostPropsType) => {
    const postElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddPostForm updateNewPost={props.updateNewPost} addPost={props.addPost}/>

            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}


type AddPostFormType = {
    updateNewPost: (values: string) => void
    addPost: () => void
}

export const AddPostForm = (props: AddPostFormType) => {
    return <Formik
        initialValues={{
            textarea: ''
        }}
        onSubmit={(
            values,
        ) => {
            props.updateNewPost(values.textarea)
            props.addPost()
        }}
    >
        <Form>
            <label htmlFor="textarea">text</label>
            <Field id="textarea" name="textarea" placeholder="text"/>
            <button type="submit">Add post</button>
        </Form>
    </Formik>
}