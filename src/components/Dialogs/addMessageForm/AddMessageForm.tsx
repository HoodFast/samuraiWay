import {Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup';

type AddMessageFormType = {
    onSubmitHandler: (values: { textarea: string}) => void
}

export const ErrorMessagesSchema = Yup.object().shape({
    textarea: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),
});

export const AddMessageForm = (props:AddMessageFormType) => {

    return <Formik
        initialValues={{
            textarea: '',
        }}
        validationSchema={ErrorMessagesSchema}
        onSubmit={(values) => props.onSubmitHandler(values)}
    >
        {({errors, touched}) => (
        <Form>
            <Field id="textarea" name="textarea" placeholder="text"/>
            {touched.textarea && errors.textarea && <div>{errors.textarea}</div>}
            <button type="submit">send</button>
        </Form>
    )}
    </Formik>
}