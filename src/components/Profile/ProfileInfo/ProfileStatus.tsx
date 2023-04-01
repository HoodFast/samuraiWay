import React, {ChangeEvent, useState} from "react";


export class ProfileStatus extends React.Component {
    state = {
        active: false,
        status:'status'
    }
    // const [status, setStatus] = useState('status')
    // const [active, setActive] = useState(false)
    //
    // const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setStatus(e.currentTarget.value)
    // }
    // const activateInput=()=>{
    //     setActive(true)
    // }
    // const ofInput=()=>{
    //     setActive(false)
    // }

    activateInput=()=> {

        this.setState({
            active:true
        })
debugger
    }
    ofInput=()=> {
        this.setState({
            active:false
        })
    }
    inputHandler=(e: ChangeEvent<HTMLInputElement>)=>  {
        this.setState({
            status:e.currentTarget.value
        })
     }


    render() {
        return (
            this.state.active ? <div><input autoFocus onBlur={this.ofInput} value={this.state.status} onChange={this.inputHandler}/></div> :
                <div><span onClick={this.activateInput}>{this.state.status}</span></div>

        )
    }
}