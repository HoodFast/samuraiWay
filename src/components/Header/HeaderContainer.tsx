import React from "react";

import {Header} from "./Header";
import {connect} from "react-redux";
import {authUserType, getMe, logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type DispatchToPropsType = {
    getMe: () => void
    logout:()=>void
}

export type HeaderPropsTypePresent = authUserType & DispatchToPropsType

export class HeaderAPIContainer extends React.Component<HeaderPropsTypePresent> {

    componentDidMount() {
        this.props.getMe()
    }


    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        id: state.auth.id,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {getMe,logout})(HeaderAPIContainer);