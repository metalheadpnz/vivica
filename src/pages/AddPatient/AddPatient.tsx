import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input2 as Input} from "../../components/Input2/Input2";

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
                <div className={s.fromLabel}>Patient Information</div>
                <div className={s.patientInformation}>

                    {/*{inputFields.map(el =>*/}
                    {/*    el.type === 'select'*/}
                    {/*        ? <div></div>*/}
                    {/*        : <Input placeholder={el.placeholder} style={{width:'436px'}}/>*/}
                    {/*)}*/}

                    <Input label={'First Name *'}/>
                    <Input label={'Date of Birth *'}/>
                    <Input label={'Secondary Phone'}/>
                    <Input label={'Address/Street 2'}/>
                    <Input label={'Zip Code'}/>
                    <Input label={'Email'}/>
                    <Input label={'Last Name *'}/>
                    {/*<Select title={'Sex *'} options={[{name: 'Male'},{name: 'Female'},]}/>*/}
                    {/*<Select title={'Country'} options={[{name: 'Rus'},{name: 'USA'},]}/>*/}
                    {/*<Select title={'City'} options={[{name: 'Pnz'},{name: 'Msk'},]}/>*/}
                    <Input label={'SSN, last 4 digits'}/>
                    <Input label={'Ethnicity'}/>
                    <Input label={'Middle Name'}/>
                    <Input label={'Cell Phone *'}/>
                    <Input label={'Address/Street 1'}/>
                    {/*<Select title={'State'} options={[{name: 'TX'},{name: 'CA'},{name: 'FL'}]}/>*/}
                    <Input label={'Race'}/>

                </div>
            </div>
        </div>
    );
}