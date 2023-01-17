import React, {useState} from 'react';
import './App.css';
import {AppRoutes} from "./routes/AppRoutes";
import {AppHeader} from "./components/AppHeader/AppHeader";
import {SideBar} from "./components/SideBar/SideBar";
import {TextInput} from "./components/TextInput/TextInput";

function App() {
    // const [value, setValue] = useState<string>('')
    return (
        <>
            <AppHeader/>
            <SideBar/>
            <AppRoutes/>
            {/*<TextInput placeholder={'place holder'}*/}
            {/*           value={value}*/}
            {/*           onChange={(e) => setValue(e.currentTarget.value)}/>*/}

        </>
    );
}

export default App;
