import React from 'react';
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

export const Patients = () => {
    const navigate = useNavigate()

    const addBtnHandler = () => {
        navigate("addPatient")
    }

    return (
        <div>
            Patients
            <Button onClick={addBtnHandler} children={'Add Patient'}/>
            <div>table</div>
        </div>
    );
}