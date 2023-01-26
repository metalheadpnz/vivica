import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import s from './Patients.module.scss'
import {Button} from "../../components/Button/Button";
import {ReactComponent as Plus} from "../../assets/images/Plus.svg";
import {Input} from "../../components/Input/Input";
import {ReactComponent as Magnifier} from "../../assets/images/magnifier.svg";
import {ReactComponent as CircularArrow} from "../../assets/images/circularArrow.svg";
import {PatientsTable} from "./components/PatientsTable";

export const Patients = () => {
    const navigate = useNavigate()

    const [input, setInput] = useState('')

    const addBtnHandler = () => {
        navigate("add-patient")
    }

    return (
        <div className={s.patientWrap}>
            <div className={s.patientsHeader}>
                <span className={s.title}>Patients</span>
                <Button title={'Add new'}
                        frontImg={<Plus/>}
                        callback={addBtnHandler}
                />
            </div>

            <div className={s.tableWrap}>
                <div className={s.searchBlock}>
                    <Input placeholder={'newInput'}
                           IconStart={<Magnifier/>}
                           onChange={e => setInput(e.currentTarget.value)}
                           style={{width: '660px'}}
                           value={input}/>
                    <div className={s.buttons}>
                        <div className={s.refreshBtn}>
                            <CircularArrow/>
                        </div>
                        <Button title={'Search'} style={{backgroundColor: '#A81D42'}}/>
                    </div>
                </div>

                <PatientsTable/>

            </div>
        </div>
    );
}
