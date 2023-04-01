import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route, Routes,} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {dialogType, messageType} from "./Redux/store";

import {NavbarContainer} from "./components/Navbar/NavbarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {HeaderAPIContainer, HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";






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
                <HeaderContainer/>
                <NavbarContainer />


                <div className={'app-wrapper-content'}>
                    <Routes>
                    <Route path="/dialogs/*" element={<DialogsContainer />}/>
                    <Route path="/profile/:userId?" element={<ProfileContainer  />}/>
                    <Route path="/news" element={<News/>}/>
                    <Route path="/music" element={<Music/>}/>
                    <Route path="/settings" element={<Settings/>}/>
                    <Route path="/users" element={<UsersContainer/>}/>
                    <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}



export default App;
