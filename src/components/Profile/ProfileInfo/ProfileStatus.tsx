import React, {ChangeEvent, RefObject} from "react";
import {updateStatus} from "../../../Redux/profile-reducer";

type ProfileStatusPropsType = {
    active:boolean
    status: string
    updateStatus:(string)=>void
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        active: false,
        status: this.props.status
    }

    activateInput = () => {

        this.setState({
            active: true
        })

    }
    deactivateInput = () => {
        this.setState({
            active: false
        })

        this.props.updateStatus(this.state.status)
    }
    inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps:ProfileStatusPropsType, prevState:ProfileStatusPropsType) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
        return (
            this.state.active ? <div><input autoFocus onBlur={this.deactivateInput} value={this.state.status}
                                            onChange={this.inputHandler}/></div> :
                <div><span onClick={this.activateInput}>{this.state.status}</span></div>

        )
    }
}