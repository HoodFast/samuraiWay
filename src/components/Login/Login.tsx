import React from "react";
import {login} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Navigate} from "react-router-dom";
import {LoginForm} from "./LoginForm/LoginForm";


type LoginPropsType = {
    isAuth:boolean
    login: (email:string,password:string, checked:boolean )=>void
}


export const Login = (props:LoginPropsType) => {


    const onSubmit = (form) => {
        props.login(form.email,form.password,!!form.checked)
    }

    if(props.isAuth){
        return <Navigate to={"/profile"}/>
    }
    return (
        <div>
            <h1>Signup</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>


    )
}

const mapStateToProps=(state: AppStateType)=>{
    return{
        isAuth:state.auth.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps,{login})(Login)





