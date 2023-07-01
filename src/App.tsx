import React from 'react';
import './App.css';
import {ProfileContainer, withRouter} from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {dialogType, messageType} from "./Redux/store";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {LoginContainer} from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/preloader/Preloader";


export type dialogsPageType = {
    messages: Array<messageType>
    newMessageBody: string
    dialogs: Array<dialogType>
}

export type postType = {
    id: string
    message: string
    likesCount: number
}

type AppType = {
    initialized:boolean
    initializeApp: () => void
}


class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader isFetching={true}/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <NavbarContainer/>


                    <div className={'app-wrapper-content'}>
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile/:userId?" element={<ProfileContainer/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<LoginContainer/>}/>
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

