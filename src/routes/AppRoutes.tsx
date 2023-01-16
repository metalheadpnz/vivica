import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Dashboard} from "../pages/Dashboard/Dashboard";
import {Patients} from "../pages/Patients/Patients";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/patients" element={<Patients/>}/>
        </Routes>
    );
};