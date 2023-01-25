import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input2 as Input} from "../../components/Input2/Input2";
import {ReactComponent as Arrow} from "../../../src/assets/images/arrow.svg";
import {Formik} from "formik";
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape(
    {
        firstName: Yup.string().min(2, 'Too Short').max(10, 'too long').required('Required')
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
                <div className={s.patientInformation}>


                    <Formik
                        initialValues={{firstName: "", Email: "", dateOfBirth: ''}}
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
                                    <form onSubmit={handleSubmit}>
                                        <Input
                                            onBlur={handleBlur}
                                            error={errors.firstName}
                                            name={'firstName'}
                                            label={'First Name'}
                                            require
                                            value={values.firstName}
                                            onChange={handleChange}
                                        />
                                        <Input
                                            name={'Email'}
                                            label={'Email'}
                                            require
                                            value={values.Email}
                                            onChange={handleChange}
                                        />
                                        <Input
                                            name={'dateOfBirth'}
                                            onChange={handleChange}
                                            value={values.dateOfBirth}
                                            type={'date'}
                                            label={'Date of Birth'}
                                        />
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
                    {/*<Input label={'Race'} isError={true} errorMessage={'sdf'}/>*/}
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
                    {/*<Input label={'Race'} isError={true} errorMessage={'sdf'}/>*/}
                    {/*<Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>*/}
                    {/*<Select title={'State'} options={[{name: 'TX'}, {name: 'CA'}, {name: 'FL'}]}/>*/}

                </div>

            </div>
        </div>
    );
}