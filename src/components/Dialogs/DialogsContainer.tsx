import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "react";





const mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
const mapDispatchToProps=(dispatch:Dispatch<any>)=>{
    return{
        updateNewMessageBody: (body)=>{
            dispatch(updateNewMessageTextCreator(body))
        },
        addNewMessageText: ()=>{
            dispatch(addNewMessageTextCreator())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (Dialogs);