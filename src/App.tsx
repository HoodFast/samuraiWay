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

import {stateType} from "./Redux/state";

export type dialogsAppPropsType ={
    state:stateType
    addPost:(post:string)=>void
}


const App = (props:dialogsAppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar state={props.state.sidebar}/>

                <div className={'app-wrapper-content'}>
                    <Routes>
                    <Route path="/dialogs/*" element={<Dialogs
                        state={props.state.dialogsPage}

                    />}/>
                    <Route path="/profile" element={<Profile addPost={props.addPost} state={props.state.profilePage}/>}/>
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
