import {Field, Form, Formik} from "formik";
import React from "react";
import {ErrorMessagesSchema} from "../../../Dialogs/addMessageForm/AddMessageForm";
import {requiredField} from "../../../../utils/validators/validators";
import s from "./AddPostFormStyle.module.css"

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
        validationSchema={ErrorMessagesSchema}
    >
        {({errors, touched}) => (
            <Form>
                <Field className={errors.textarea && s.errorInput} id="textarea" name="textarea" placeholder="text"/>
                {touched.textarea && errors.textarea && <div className={s.errors}>{errors.textarea}</div>}
                <button type="submit">Add Post</button>
            </Form>
        )}
    </Formik>
}