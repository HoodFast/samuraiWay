import React, {ChangeEvent, useEffect, useState} from "react";


type ProfileStatusPropsType = {
    status:string
    updateStatus:(string)=>void
}


export const ProfileStatusWithHooks = (props:ProfileStatusPropsType) => {
    let [editMode, setEditMod] = useState(false)
    let [value,setValue] = useState(props.status)

    useEffect(()=>{
        setValue(props.status)
    },[props.status])

    const HandlerStatusEdit = () => {
        setEditMod(!editMode)
    }
    const statusChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    const updateStatus=()=>{
        setEditMod(!editMode)
        props.updateStatus(value)
    }
    return (

        <div>
            {!editMode && <div>
                <span onClick={HandlerStatusEdit}
                >{props.status || "-----"}</span>
            </div>}
            {editMode && <div>
                <input value={value} onChange={statusChange} onBlur={updateStatus} autoFocus={true}/>
            </div>}
        </div>

    )
}