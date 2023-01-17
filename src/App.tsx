import React, {useState} from 'react';
import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import {AppHeader} from "./components/AppHeader/AppHeader";
import {SideBar} from "./components/SideBar/SideBar";
import {TextInput} from "./components/TextInput/TextInput";
import {NavLink} from "react-router-dom";

function App() {
    // const [value, setValue] = useState<string>('')
    return (
        <>
            <AppHeader/>
            <SideBar/>
            <AppRoutes/>

            <NavLink to={"results"}>
                <span>results</span>
            </NavLink>

            {/*<TextInput placeholder={'place holder'}*/}
            {/*           value={value}*/}
            {/*           onChange={(e) => setValue(e.currentTarget.value)}/>*/}

        </>
    );
}

export default App;
