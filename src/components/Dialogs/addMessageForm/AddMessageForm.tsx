import {Field, Form, Formik} from "formik";
import React from "react";

type AddMessageFormType = {
    onSubmitHandler: (values: { textarea: string }) => void
}


export const AddMessageForm = (props: AddMessageFormType) => {
    return <Formik
        initialValues={{
            textarea: ''
        }}
        onSubmit={(values) => props.onSubmitHandler(values)}
    >
        <Form>
            <label htmlFor="textarea">text</label>
            <Field id="textarea" name="textarea" placeholder="text"/>
            <button type="submit">send</button>
        </Form>
    </Formik>
}