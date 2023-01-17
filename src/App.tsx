import React, {useState} from 'react';
import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import {AppHeader} from "./components/AppHeader/AppHeader";
import {SideBar} from "./components/SideBar/SideBar";
import {MainContent} from "./components/MainContent/MainContent";

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <>
            <AppHeader/>
            <div className='wrap_app'>
                <SideBar collapsed={collapsed} setCollapsed={setCollapsed}/>
                <MainContent collapsed={collapsed}/>
            </div>
        </>
    );
}

export default App;
