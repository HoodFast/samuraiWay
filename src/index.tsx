import React from 'react';
import reportWebVitals from './reportWebVitals';
import {store} from "./Redux/redux-store";
import App, {stateType} from "./App";
import ReactDOM from "react-dom/client";
import {StoreContext} from './storeContext';

export const rerenderEntreThree = (state: stateType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <StoreContext.Provider value={store}>
                <App />
            </StoreContext.Provider>

        </React.StrictMode>
    );
}


const state = store.getState()

rerenderEntreThree(state);
store.subscribe(() => rerenderEntreThree(state));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
