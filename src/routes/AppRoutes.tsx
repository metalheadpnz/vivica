import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Dashboard} from "../pages/Dashboard/Dashboard";
import {Patients} from "../pages/Patients/Patients";
import {Results} from "../pages/Results/Results";
import {AddPatient} from "../pages/AddPatient/AddPatient";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index path="dashboard" element={<Dashboard/>}/>
            <Route path="patients" element={<Patients/>}/>
            <Route path={'patients/addPatient'} element={<AddPatient/>}/>
            <Route path="results" element={<Results/>}/>
        </Routes>
    );
};

