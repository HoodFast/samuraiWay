import {Navigate} from "react-router-dom";
import React from "react";
import {ProfileAPIContainer} from "../Profile/ProfileContainer";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";



const mapStateToPropsForRedirect = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const withAuthRedirect = (Component)=>{

    class RedirectComponent extends React.Component<any, any>{
        render(){
            if(!this.props.isAuth) return <Navigate to={'/login'}/>
            return <Component {...this.props}/>
        }
    }

    const ConnectedAuthRedirectComponent=connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}