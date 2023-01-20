import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './Patients.module.scss'
import {Button} from "../../components/Button/Button";
import {ReactComponent as Plus} from "../../assets/images/Plus.svg";

export const Patients = () => {
    const navigate = useNavigate()

    const addBtnHandler = () => {
        navigate("addPatient")
    }

    return (
        <div className={s.patientWrap}>
            <div className={s.patientsHeader}>
                <span className={s.title}>Patients</span>
                <Button title={'Add new'}
                        frontImg={<Plus/>}
                        callback={() => {
                            console.log('btn')
                        }}
                />
            </div>

            <div className={s.tableWrap}>
                <div className={s.searchBlock}></div>
                <div className={s.table}></div>
            </div>
        </div>
    );
}