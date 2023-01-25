import React from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {SideBar} from "./components/SideBar/SideBar";
import {MainContent} from "./components/MainContent/MainContent";
import './theme.scss'

function App() {
    return (
        <div className={'wrapper'}>
            <AppHeader/>
            <div className='wrap_app'>
                <SideBar />
                <MainContent />
            </div>
        </div>
    );
}

export default App;
