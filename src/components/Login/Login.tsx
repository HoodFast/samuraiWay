import {Field, Form, Formik, FormikHelpers } from "formik";

interface Values {
    login: string;
    password: string;
}


export const Login = () => {
    return (
        <div>
            <h1>Signup</h1>
            <LoginForm/>
        </div>


    )
}

export const LoginForm = () => {
    return (
            <Formik
                initialValues={{
                    login: '',
                    password: '',
                }}
                onSubmit={(
                    values: Values,
                    {setSubmitting}: FormikHelpers<Values>
                ) => {
                        alert(JSON.stringify(values, null, 2));
                        // setSubmitting(false);
                }}
            >
                <Form>
                    <label htmlFor="login">First Name</label>
                    <Field id="login" name="login" placeholder="login"/>

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