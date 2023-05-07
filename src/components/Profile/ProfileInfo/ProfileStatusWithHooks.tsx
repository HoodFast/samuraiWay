import React, {useState} from "react";

type ProfileStatusPropsType = {
    active: boolean
    status: string
}


export const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMod] = useState(false)

    const HandlerStatusEdit = () => {
        setEditMod(!editMode)
    }
    return (

        <div>
            {!editMode && <div>
                <span onClick={HandlerStatusEdit}
                >{props.status || "-----"}</span>
            </div>}
            {editMode && <div>
                <input onBlur={HandlerStatusEdit} autoFocus={true}/>
            </div>}
        </div>

    )
}