import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

type PropsDialogType = {
    id: number
    name: string
}
type PropsMessage = {
    message: string
}

// type dialogsDataType = {
//     id:number
//     name:string
// }

const dialogsData = [
    {id: 1, name: "Vitalya"},
    {id: 2, name: "Dron"},
    {id: 3, name: "Sveta"},
]

const messageData=[
    {id:1,message:"Hi"},
    {id:2,message:"Hellow"},
    {id:3,message:"How are you?"},
]

const DialogItem = (props: PropsDialogType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: PropsMessage) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export const Dialogs = () => {
    const dialogsDataMap =()=>{
        return (
            dialogsData.map(d=><DialogItem name={d.name} id={d.id}/>)
        )
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsDataMap()}
                {/*<DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>*/}
                {/*<DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>*/}
                {/*<DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>*/}

            </div>
            <div className={s.messages}>
                {messageData.map(d =><Message message={d.message}/>)}
                {/*<Message message={messageData[0].message}/>*/}
                {/*<Message message={messageData[1].message}/>*/}
                {/*<Message message={messageData[2].message}/>*/}


            </div>
        </div>
    )
}