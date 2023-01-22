import React, {useEffect, useState} from 'react';
import './App.css';
import {AppHeader} from "./components/AppHeader/AppHeader";
import {SideBar} from "./components/SideBar/SideBar";
import {MainContent} from "./components/MainContent/MainContent";
import '../src/assets/theme.scss'

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    useEffect(() => {
        const string = localStorage.getItem('collapsedMenu')
        const collapsedLS = (string !== null) && JSON.parse(string)
        setCollapsed(collapsedLS)
    }, [])


    return (
        <div className={'wrapper'}>
            <AppHeader/>
            <div className='wrap_app'>
                <SideBar collapsed={collapsed} setCollapsed={setCollapsed}/>
                <MainContent collapsed={collapsed}/>
            </div>
        </div>
    );
}

export default App;
