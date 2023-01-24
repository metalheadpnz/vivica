import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input} from "../../components/Input/Input";
import {Select} from "../../components/Select/Select";

type FieldType = {
    placeholder: string
    type: 'textInput' | 'calendar' | 'select'
    isRequired: boolean
    options?: string[]
}

const inputFields: FieldType[] = [
    {
        placeholder: 'First Name',
        isRequired: true,
        type: 'select',
    },
    {
        placeholder: 'Date of Birth',
        isRequired: true,
        type: 'calendar',
    },
    {
        placeholder: 'Secondary Phone',
        isRequired: false,
        type: 'calendar',
    },
]

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
                <div className={s.patientInformation}>

                    {/*{inputFields.map(el =>*/}
                    {/*    el.type === 'select'*/}
                    {/*        ? <div></div>*/}
                    {/*        : <Input placeholder={el.placeholder} style={{width:'436px'}}/>*/}
                    {/*)}*/}

                    <Input placeholder={'First Name *'}/>
                    <Input placeholder={'Date of Birth *'}/>
                    <Input placeholder={'Secondary Phone'}/>
                    <Input placeholder={'Address/Street 2'}/>
                    <Input placeholder={'Zip Code'}/>
                    <Input placeholder={'Email'}/>
                    <Input placeholder={'Last Name *'}/>
                    <Select title={'Sex *'} options={[{name: 'Male'},{name: 'Female'},]}/>
                    <Select title={'Country'} options={[{name: 'Rus'},{name: 'USA'},]}/>
                    <Select title={'City'} options={[{name: 'Pnz'},{name: 'Msk'},]}/>
                    <Input placeholder={'SSN, last 4 digits'}/>
                    <Input placeholder={'Ethnicity'}/>
                    <Input placeholder={'Middle Name'}/>
                    <Input placeholder={'Cell Phone *'}/>
                    <Input placeholder={'Address/Street 1'}/>
                    <Select title={'State'} options={[{name: 'TX'},{name: 'CA'},{name: 'FL'}]}/>
                    <Input placeholder={'Race'}/>

                </div>
            </div>
        </div>
    );
}