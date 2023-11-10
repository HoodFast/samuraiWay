import React from "react";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginForm/LoginForm";


type LoginPropsType = {
    captchaUrl:string|null
    isAuth:boolean
    login: (email:string,password:string, checked:boolean,captcha:string,setFieldValue )=>void
}


export const Login = (props:LoginPropsType) => {


    const onSubmit = (form, setFieldValue) => {
        props.login(form.email,form.password,!!form.checked,form.captcha,setFieldValue)

    }

    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>Signup</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>


    )
}

const mapStateToProps=(state: AppStateType)=>{
    return{
        captchaUrl:state.auth.captchaUrl,
        isAuth:state.auth.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps,{login})(Login)





