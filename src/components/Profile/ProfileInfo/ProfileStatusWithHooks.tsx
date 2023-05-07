import React, {ChangeEvent, useState} from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";


type ProfileStatusPropsType = {
    updateStatus:(string)=>void
}


export const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {
    let [editMode, setEditMod] = useState(false)
    let status = useSelector<AppStateType, string>((state) => state.profilePage.status)
    const HandlerStatusEdit = () => {
        setEditMod(!editMode)
    }

    const updateStatus=(e:ChangeEvent<HTMLInputElement>)=>{
        props.updateStatus(e.currentTarget.value)
        setEditMod(!editMode)
    }
    return (

        <div>
            {!editMode && <div>
                <span onClick={HandlerStatusEdit}
                >{status || "-----"}</span>
            </div>}
            {editMode && <div>
                <input onBlur={updateStatus} autoFocus={true}/>
            </div>}
        </div>

    )
}