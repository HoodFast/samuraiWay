import React from 'react';
import {addNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux"





const mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,

    }
}
const mapDispatchToProps=(dispatch:Dispatch<any>)=>{
    return{
        addNewMessageText: (message)=>{
            dispatch(addNewMessageTextCreator(message))
        }
    }
}


export const DialogsContainer = compose<React.ComponentType>(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)



