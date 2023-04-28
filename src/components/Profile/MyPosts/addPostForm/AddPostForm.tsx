import {Field, Form, Formik} from "formik";
import React from "react";

type AddPostFormType = {
    updateNewPost: (values: string) => void
    onSubmit: (postMessage: string) => void
}

export const AddPostForm = (props: AddPostFormType) => {
    const addPost = (values) => {
        props.onSubmit(values.textarea)
    }
    return <Formik
        initialValues={{textarea: ''}}
        onSubmit={addPost}
    >
        <Form>
            <label htmlFor="textarea">text</label>
            <Field id="textarea" name="textarea" placeholder="text"/>
            <button type="submit">Add post</button>
        </Form>
    </Formik>
}