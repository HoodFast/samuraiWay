import React from "react";
import {Field, Form, Formik, FormikHelpers} from "formik";
import {authMe} from "../../Redux/auth-reducer";

interface Values {
    email: string;
    password: string;
}


export const Login = () => {
    const onSubmit = (data) => {
        authMe(data)
    }
    return (
        <div>
            <h1>Signup</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>


    )
}

type LoginFormType = {
    onSubmit: (data) => void
}


export const LoginForm: React.FC<LoginFormType> = ({onSubmit}) => {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
            }}
            onSubmit={(
                values: Values,
                {setSubmitting}: FormikHelpers<Values>
            ) => {
                onSubmit(values)
                setSubmitting(false);
            }}
        >
            <Form>
                <label htmlFor="email">First Name</label>
                <Field id="email" name="email" placeholder="login"/>

                <label htmlFor="password">Last Name</label>
                <Field id="password" name="password" placeholder="password"/>

                <label>
                    <Field type="checkbox" name="checked" value="One"/>
                    remember me
                </label>
                <button type="submit">Login</button>
            </Form>
        </Formik>
    )
}