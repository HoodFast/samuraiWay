
import ReactDOM from 'react-dom';
import React from 'react';
import {SamuraiJSApp} from "./App";
import {createRoot} from "react-dom/client";


it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = createRoot(div);
    root.render(
        <SamuraiJSApp/>
    );
    ReactDOM.unmountComponentAtNode(div);
})