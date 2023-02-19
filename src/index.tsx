import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/redux-store";
import App, {stateType} from "./App";
import ReactDOM from "react-dom/client";

export const rerenderEntreThree = (state:any) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={state}/>
        </React.StrictMode>
    );
}


const state=store.getState()
debugger
rerenderEntreThree(state);
store.subscribe(()=>rerenderEntreThree(state));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
