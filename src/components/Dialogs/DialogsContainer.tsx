import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "react";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {ProfileAPIContainer} from "../Profile/ProfileContainer";





const mapStateToProps=(state:AppStateType)=>{
    return{
        dialogsPage: state.dialogsPage,
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

const AuthRedirectComponent=withAuthRedirect(Dialogs)

export const DialogsContainer = connect(mapStateToProps,mapDispatchToProps) (AuthRedirectComponent);