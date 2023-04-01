import React, {ChangeEvent, RefObject} from "react";

type ProfileStatusPropsType = {
    active:boolean
    status: string
}


export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        active: false,
        // @ts-ignore
        status: this.props.status
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

    activateInput = () => {

        this.setState({
            active: true
        })

    }
    deactivateInput = () => {
        this.setState({
            active: false
        })
        // @ts-ignore
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