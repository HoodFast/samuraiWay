import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
    return (
        <div>
            <Header/>
            <Tehnologies />
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href='#s'>Home </a>
            <a href='#s'>Home </a>
            <a href='#s'>News Feed </a>
            <a href='#s'>News Feed </a>
            <a href='#s'>News Feed </a>
            <a href='#s'>Messages </a>
        </div>
    );
}

const Tehnologies = () => {
    return (
        <div>
            <div>
                Hellow
                <ul>
                    <li> css</li>
                    <li> html</li>
                    <li> js</li>
                    <li> react</li>
                </ul>
            </div>
        </div>
    );
}

export default App;
