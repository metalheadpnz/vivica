import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";

export const AddPatient = () => {
    const location = useLocation().pathname.split('/');
    const navigation = useNavigate()
    const changeLocationHandler = () => {
        navigation('/patients')
    }

    return (
        <div>
            <div>
                <span onClick={changeLocationHandler}>{location[1]}</span>
                <span>/</span>
                <span>{location[2]}</span>
            </div>
            <div>Add patient</div>
            <div>Form</div>
        </div>
    );
}