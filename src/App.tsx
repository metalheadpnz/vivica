import React from 'react';
import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import {AppHeader} from "./components/AppHeader/AppHeader";
import {SideBar} from "./components/SideBar/SideBar";

function App() {
    return (
        <>
            <AppHeader/>
            <SideBar/>
            <AppRoutes/>
        </>
    );
}

export default App;
