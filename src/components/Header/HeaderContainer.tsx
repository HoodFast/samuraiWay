import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {authUserType, getMe, setAuth} from "../../Redux/auth-reducer";
import {AppStateType} from "../../Redux/redux-store";


type DispatchToPropsType = {
    setAuth: (userId: number, email: string, login: string) => void
    getMe: () => void
}

export type HeaderPropsTypePresent = authUserType & DispatchToPropsType

export class HeaderAPIContainer extends React.Component<HeaderPropsTypePresent> {

    componentDidMount() {

        this.props.getMe()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me/`,{
        //     withCredentials:true
        // }).then(
        //
        //     response => {
        //
        //         if(response.data.resultCode === 0) {
        //             this.props.setAuth(
        //                 response.data.data.id,
        //                 response.data.data.email,
        //                 response.data.data.login,
        //             )
        //         }
        //     })
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

export const HeaderContainer = connect(mapStateToProps, {setAuth, getMe})(HeaderAPIContainer);