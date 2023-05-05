import React from "react";

import {Header} from "./Header";
import {connect} from "react-redux";
import {authUserType, logout} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type DispatchToPropsType = {
    logout:()=>void
}

export type HeaderPropsTypePresent = authUserType & DispatchToPropsType

export class HeaderAPIContainer extends React.Component<HeaderPropsTypePresent> {




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

export const HeaderContainer = connect(mapStateToProps, {logout})(HeaderAPIContainer);