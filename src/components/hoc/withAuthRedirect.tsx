import {Navigate} from "react-router-dom";
import React, {ComponentType} from "react";
import {AppStateType} from "../../Redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStatePropsType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) return <Navigate to={'/login'}/>
        return <Component {...restProps as T & {} }/>
    }
    // class RedirectComponent extends React.Component<any, any>{
    //     render(){
    //         if(!this.props.isAuth) return <Navigate to={'/login'}/>
    //         return <Component {...this.props}/>
    //     }
    // }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
}