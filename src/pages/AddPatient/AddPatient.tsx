import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input2 as Input} from "../../components/Input2/Input2";
import {Select} from "../../components/Select/Select";
import {ReactComponent as Arrow} from "../../../src/assets/images/arrow.svg";

export const AddPatient = () => {
    const navigation = useNavigate()
    const changeLocationHandler = () => {
        navigation('/patients')
    }

    return (
        <div className={s.wrap}>
            <div className={s.breadCrumbs}>
                <span onClick={changeLocationHandler}>Patients</span>
                    <Arrow style={{rotate: "90deg", position: 'relative', bottom: "2px"}}/>
                <span>Add patient</span>
            </div>

            <div className={s.addPatient}>Add patient</div>
            <div className={s.formWrap}>
                <div className={s.fromLabel}>Patient Information</div>
                <div className={s.patientInformation}>

                    <Input label={'First Name'} require/>
                    <Input label={'Date of Birth *'}/>
                    <Input label={'Secondary Phone'}/>
                    <Input label={'Address/Street 2'}/>
                    <Input label={'Zip Code'}/>
                    <Input label={'Email'}/>
                    <Input label={'Race'} isError={true} errorMessage={'sdf'}/>
                    <Input label={'Last Name *'}/>
                    {/*<Select title={'Sex *'} options={[{name: 'Male'},{name: 'Female'},]}/>*/}
                    {/*<Select title={'Country'} options={[{name: 'Rus'},{name: 'USA'},]}/>*/}
                    {/*<Select title={'City'} options={[{name: 'Pnz'},{name: 'Msk'},]}/>*/}
                    <Input label={'SSN, last 4 digits'}/>
                    <Input label={'Ethnicity'}/>
                    <Input label={'Middle Name'}/>
                    <Input label={'Cell Phone *'}/>
                    <Input label={'Address/Street 1'}/>
                    {/*<Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>*/}
                    <Input label={'Race'} isError={true} errorMessage={'sdf'}/>
                    <Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>
                    <Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>
                </div>

            </div>
        </div>
    );
}