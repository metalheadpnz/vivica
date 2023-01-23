import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import s from './Patients.module.scss'
import {Button} from "../../components/Button/Button";
import {ReactComponent as Plus} from "../../assets/images/Plus.svg";
import {Input} from "../../components/Input/Input";
import {ReactComponent as Magnifier} from "../../assets/images/magnifier.svg";

export const Patients = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState('')

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
                <div className={s.searchBlock}>search

                    <Input placeholder={'newInput'}
                           IconStart={<Magnifier/>}
                           onChange={e => setInput(e.currentTarget.value)}
                           value={input}/>

                </div>



                <div className={s.table}>table</div>
            </div>
        </div>
    );
}
