import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom'
import {Dashboard} from "../pages/Dashboard/Dashboard";
import {Patients} from "../pages/Patients/Patients";
import {Results} from "../pages/Results/Results";
import {AddPatient} from "../pages/AddPatient/AddPatient";
import {Orders} from "../pages/Orders/Orders";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="/" element={<Navigate to="dashboard"/>}/>
            <Route index path="dashboard" element={<Dashboard/>}/>
            <Route path="patients" element={<Patients/>}/>
            <Route path={'patients/add-patient'} element={<AddPatient/>}/>
            <Route path="results" element={<Results/>}/>
            <Route path="orders" element={<Orders/>}/>
        </Routes>
    );
};

