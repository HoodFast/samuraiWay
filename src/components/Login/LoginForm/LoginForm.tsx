import React from "react";
import * as Yup from "yup";
import {Field, Form, Formik, FormikHelpers} from "formik";
import s from "../../Profile/MyPosts/addPostForm/AddPostFormStyle.module.css";

interface Values {
    email: string;
    password: string;
    error?:string
}

type LoginFormType = {
    onSubmit: (data, setFieldValue) => void
}

export const LoginForm: React.FC<LoginFormType> = ({onSubmit}) => {
    const ErrorMessagesSchema = Yup.object().shape({
        email: Yup.string()
            .matches(/[a-z]/, "необходимо использовать только латинские символы")
            .required('Required')
            .email('не похоже на емэйл'),
        password: Yup.string()
            .min(2, 'Too Short!')
            .matches(/[a-z]/, "необходимо использовать только латинские символы")
            .required('Required')
    });
    return (
        <Formik
            validationSchema={ErrorMessagesSchema}
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(
                values: Values,
                {setFieldValue}
            ) => {
                onSubmit(values, setFieldValue)
            }}
        >
            {({errors, touched,values}) => (

                <Form className={s.form}>
                    <label htmlFor="email">Email</label>
                    <Field className={s.field} id="email" name="email" placeholder="login"/>
                    {touched.email && errors.email && <div className={s.errors}>{errors.email}</div>}
                    <label htmlFor="password">Password</label>
                    <Field className={s.field} type="password" id="password" name="password" placeholder="password"/>
                    {touched.password && errors.password && <div className={s.errors}>{errors.password}</div>}
                    <label>
                        <Field  className={s.field} type="checkbox" name="checked" value="One"/>
                        remember me
                    </label>
                    <div className={s.errors}>
                        {values.error ? <div className={s.errorSplash}><p>{values.error}</p></div> : null}
                    </div>
                    <button type="submit">Login</button>

                </Form>

            )}

        </Formik>
    )
}