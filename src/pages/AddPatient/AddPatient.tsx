import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input2 as Input} from "../../components/Input2/Input2";
import {ReactComponent as Arrow} from "../../../src/assets/images/arrow.svg";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Select} from "../../components/Select/Select";


const SignupSchema = Yup.object().shape(
    {
        firstName: Yup.string().max(50).required().label('First Name'),
        dateOfBirth: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required().label('Date of Birth'),
        lastName: Yup.string().max(50).required().label('Last Name'),
        middleName: Yup.string().max(50).label('Middle Name'),
        sex: Yup.string().required(),
    }
)

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


                <Formik
                    initialValues={{
                        firstName: "", email: "", dateOfBirth: '', lastName: '', middleName: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}>
                    {
                        ({
                             values,
                             errors,
                             touched,
                             handleChange,
                             handleBlur,
                             handleSubmit,
                             isSubmitting
                         }) => {

                            return (
                                <form onSubmit={handleSubmit} className={s.patientInformation}>


                                    <Input
                                        label={'First Name'}
                                        name={'firstName'}
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.firstName && errors.firstName}
                                        require
                                    />
                                    <Input
                                        label={'Last Name'}
                                        name={'lastName'}
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.lastName && errors.lastName}
                                        require
                                    />
                                    <Input
                                        label={'Middle Name'}
                                        name={'middleName'}
                                        value={values.middleName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        error={touched.middleName && errors.middleName}
                                    />
                                    <Input
                                        label={'Date of Birth'}
                                        name={'dateOfBirth'}
                                        value={values.dateOfBirth}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        type={'date'}
                                        error={touched.dateOfBirth && errors.dateOfBirth}
                                        require
                                    />
                                    <Select
                                        title={"Sex"}
                                        name={'sex'}
                                        require
                                        options={[{name: 'male'}, {name: 'female'}]}
                                    />


                                    {/*<Input*/}
                                    {/*    label={'Email'}*/}
                                    {/*    name={'email'}*/}
                                    {/*    value={values.email}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    error={touched.email && errors.email}*/}
                                    {/*    require*/}
                                    {/*/>*/}


                                    <button type='submit'>btn</button>

                                </form>
                            )
                        }
                    }
                </Formik>


                {/*<Input label={'First Name'} require/>*/}
                {/*<Input label={'Date of Birth *'}/>*/}
                {/*<Input label={'Secondary Phone'}/>*/}
                {/*<Input label={'Address/Street 2'}/>*/}
                {/*<Input label={'Zip Code'}/>*/}
                {/*<Input label={'Email'}/>*/}
                {/*<Input label={'Race'} error={'sdf'}/>*/}
                {/*<Input label={'Last Name *'}/>*/}
                {/*<Select title={'Sex *'} options={[{name: 'Male'},{name: 'Female'},]}/>*/}
                {/*<Select title={'Country'} options={[{name: 'Rus'},{name: 'USA'},]}/>*/}
                {/*<Select title={'City'} options={[{name: 'Pnz'},{name: 'Msk'},]}/>*/}
                {/*<Input label={'SSN, last 4 digits'}/>*/}
                {/*<Input label={'Ethnicity'}/>*/}
                {/*<Input label={'Middle Name'}/>*/}
                {/*<Input label={'Cell Phone *'}/>*/}
                {/*<Input label={'Address/Street 1'}/>*/}
                {/*<Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>*/}
                {/*<Input label={'Race'} error={'sdf'}/>*/}
                {/*<Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>*/}
                {/*<Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>*/}


            </div>
        </div>
    );
}