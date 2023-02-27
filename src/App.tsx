import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

import {dialogType, messageType, navbarBlockType} from "./Redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavbarContainer} from "./components/Navbar/NavbarContainer";

export type AppPropsType ={
    store:any
    dispatch:any

}
export type stateType = {
    sidebar:navbarBlockType
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}
export type profilePageType = {
    posts: Array<postType>
    newPostText:string

}
export type dialogsPageType={
    messages:Array<messageType>
    newMessageBody:string
    dialogs:Array<dialogType>
}

export type postType={
    id: string
    message:string
    likesCount:number
}


const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavbarContainer />


                <div className={'app-wrapper-content'}>
                    <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path="/profile" element={<Profile  />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
