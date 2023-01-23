import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input} from "../../components/Input/Input";

export const AddPatient = () => {
    const location = useLocation().pathname.split('/');
    const navigation = useNavigate()
    const changeLocationHandler = () => {
        navigation('/patients')
    }

    return (
        <div className={s.wrap}>
            <div>
                <span onClick={changeLocationHandler}>{location[1]}</span>
                <span> {">"} </span>
                <span>{location[2]}</span>
            </div>

            <div>Add patient</div>
            <div className={s.formWrap}>
                Patient Information
                <form className={s.patientInformation}>


                    <Input placeholder={'First Name *'}/>


                </form>
            </div>
        </div>
    );
}