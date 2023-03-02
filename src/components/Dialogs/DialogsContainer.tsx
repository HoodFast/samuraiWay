import {addNewMessageTextCreator, updateNewMessageTextCreator} from "../../Redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";



const mapStateToProps=(state)=>{
    return{
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps=(dispatch)=>{
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