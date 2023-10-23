import React, {ReactNode, Suspense} from 'react';
import './App.css';
import {withRouter} from "components/Profile/ProfileContainer";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {News} from "components/News/News";
import {Music} from "components/Music/Music";
import {Settings} from "components/Settings/Settings";
import {dialogType, messageType} from "Redux/store";
import {NavbarContainer} from "components/Navbar/NavbarContainer";

import {HeaderContainer} from "components/Header/HeaderContainer";
import {LoginContainer} from "components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "Redux/app-reducer";
import {AppStateType, store} from "Redux/redux-store";
import {Preloader} from "components/common/preloader/Preloader";
import {withSuspense} from "./components/hoc/withSuspense";

const DialogsContainer = React.lazy(()=> import('components/Dialogs/DialogsContainer').then(
    ({DialogsContainer})=>({default:DialogsContainer})
))
const ProfileContainer = React.lazy(()=> import('components/Profile/ProfileContainer').then(
    ({ProfileContainer})=>({default:ProfileContainer})
))
const UsersContainer = React.lazy(()=> import('components/Users/UsersContainer'))


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
    initialized: boolean
    initializeApp: () => void
}


class App extends React.Component<AppType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader isFetching={true}/>
        }

        return (

            <div className='app-wrapper'>
                <HeaderContainer/>
                <NavbarContainer/>
                <div className={'app-wrapper-content'}>
                    <Routes>
                        <Route path="/dialogs/*" element={withSuspense(DialogsContainer)}/>
                        <Route path="/profile/:userId?" element={withSuspense(ProfileContainer)}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={withSuspense(UsersContainer)}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        initialized: state.app.initialized
    }
}

// export default compose(
//     withRouter,
//     connect(mapStateToProps, {initializeApp})
// )(App)

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App)

export let SamuraiJSApp = (props)=>{
    return <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}