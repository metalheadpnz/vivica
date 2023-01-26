import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input2 as Input} from "../../components/Input2/Input2";
import {ReactComponent as Arrow} from "../../../src/assets/images/arrow.svg";
import {Formik} from "formik";
import * as Yup from 'yup';
import {Select} from "../../components/Select/Select";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// label={'First Name'}*/}
{/*    name={'firstName'}*/
}
{/*    value={values.firstName}*/
}
{/*    onChange={handleChange}*/
}
{/*    onBlur={handleBlur}*/
}
{/*    error={touched.firstName && errors.firstName}*/
}
{/*    require*/
}

type FormFieldsType = { name: string, label: string, require: boolean }

const formFields = [
    {name: 'firstName', label: 'First Name', require: true},
    {name: 'lastName', label: 'Last Name', require: false},
] as const

const initialValue: { [key: string]: string } = {}

const initialValues = formFields.reduce((acc, {name}) => ({...acc, [name]: ''}), initialValue)

// const initialValues: {name?: string} = {}
//
// formFields.forEach(f => initialValues[f.name ] = '')


const SignupSchema = Yup.object().shape(
    {
        firstName: Yup.string().max(2, 'to long').required().label('First Name'),
        // dateOfBirth: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required().label('Date of Birth'),
        lastName: Yup.string().max(2, 'to long').required().label('Last Name'),
        // middleName: Yup.string().max(50, 'to long').label('Middle Name'),
        // sex: Yup.string().required().label('Sex'),
        // cellPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required().min(11, 'Phone number is not valid').max(11, 'Phone number is not valid').label('Cell Phone'),
        // secondaryPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required().min(11, 'Phone number is not valid').max(11, 'Phone number is not valid').label('Cell Phone'),
        // country: Yup.string().label('Country'),
        // addressStreet: Yup.string().max(50, 'to long').label('Address'),
        // addressStreet2: Yup.string().max(50, 'to long').label('Address'),
        // city: Yup.string().label('City'),
        // state: Yup.string().label('State'),
        // zipCode: Yup.string().max(11, 'to long').label('Zip Code'),
        // SSN: Yup.string().max(4, 'must be 4 digits').min(4, 'must be 4 digits').label('SSN'),
        // race: Yup.string().label('Race'),
        // email: Yup.string().email('Must be a valid email').max(255).label('Email'),
        // ethnicity: Yup.string().label('Ethnicity'),
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
                    initialValues={initialValues}
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
                             isSubmitting,
                             setFieldValue,
                             setTouched
                         }) => {
                            console.log('touched=', touched)
                            // console.log('values=', values)
                            console.log('errors=', errors)
                            return (
                                <form onSubmit={handleSubmit} className={s.patientInformation}>

                                    {formFields.map(f =>
                                        <Input
                                            key={f.name}
                                            label={f.label}
                                            name={f.name}
                                            value={values[f.name]}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            // error={ (values[f.name] || touched[f.name]) && errors[f.name]}
                                            error={touched[f.name] && errors[f.name]}
                                            require
                                        />
                                    )}

                                    {/*<Input*/}
                                    {/*    label={'First Name'}*/}
                                    {/*    name={'firstName'}*/}
                                    {/*    value={values.firstName}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    error={touched.firstName && errors.firstName}*/}
                                    {/*    require*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Last Name'}*/}
                                    {/*    name={'lastName'}*/}
                                    {/*    value={values.lastName}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    error={touched.lastName && errors.lastName}*/}
                                    {/*    require*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Middle Name'}*/}
                                    {/*    name={'middleName'}*/}
                                    {/*    value={values.middleName}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    error={touched.middleName && errors.middleName}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Date of Birth'}*/}
                                    {/*    name={'dateOfBirth'}*/}
                                    {/*    value={values.dateOfBirth}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'date'}*/}
                                    {/*    error={touched.dateOfBirth && errors.dateOfBirth}*/}
                                    {/*    require*/}
                                    {/*/>*/}
                                    {/*<Select*/}
                                    {/*    title={"Sex"}*/}
                                    {/*    name={'sex'}*/}
                                    {/*    require*/}
                                    {/*    onChange={(e) => {*/}
                                    {/*        setFieldValue('sex', e)*/}
                                    {/*    }}*/}
                                    {/*    onBlur={() => {*/}
                                    {/*        setTouched({...touched, sex: true})*/}
                                    {/*    }}*/}
                                    {/*    options={[{name: 'male'}, {name: 'female'}]}*/}
                                    {/*    error={touched.sex && errors.sex}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Cell Phone'}*/}
                                    {/*    name={'cellPhone'}*/}
                                    {/*    value={values.cellPhone}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'number'}*/}
                                    {/*    error={touched.cellPhone && errors.cellPhone}*/}
                                    {/*    require*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Secondary Phone'}*/}
                                    {/*    name={'secondaryPhone'}*/}
                                    {/*    value={values.secondaryPhone}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'number'}*/}
                                    {/*    error={touched.secondaryPhone && errors.secondaryPhone}*/}
                                    {/*/>*/}
                                    {/*<Select*/}
                                    {/*    title={"Country"}*/}
                                    {/*    name={'country'}*/}
                                    {/*    require*/}
                                    {/*    onChange={(e) => {*/}
                                    {/*        setFieldValue('country', e)*/}
                                    {/*    }}*/}
                                    {/*    onBlur={() => {*/}
                                    {/*        setTouched({...touched, country: true})*/}
                                    {/*    }}*/}
                                    {/*    options={[{name: 'RU'}, {name: 'KZ'}, {name: 'US'}]}*/}
                                    {/*    error={touched.country && errors.country}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Address/Street 1'}*/}
                                    {/*    name={'addressStreet'}*/}
                                    {/*    value={values.addressStreet}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'text'}*/}
                                    {/*    error={touched.addressStreet && errors.addressStreet}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Address/Street 2'}*/}
                                    {/*    name={'addressStreet2'}*/}
                                    {/*    value={values.addressStreet2}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'text'}*/}
                                    {/*    error={touched.addressStreet2 && errors.addressStreet2}*/}
                                    {/*/>*/}
                                    {/*<Select*/}
                                    {/*    title={"City"}*/}
                                    {/*    name={'city'}*/}
                                    {/*    require*/}
                                    {/*    onChange={(e) => {*/}
                                    {/*        setFieldValue('city', e)*/}
                                    {/*    }}*/}
                                    {/*    onBlur={() => {*/}
                                    {/*        setTouched({...touched, city: true})*/}
                                    {/*    }}*/}
                                    {/*    options={[{name: 'NY'}, {name: 'LA'}]}*/}
                                    {/*    error={touched.city && errors.city}*/}
                                    {/*/>*/}
                                    {/*<Select*/}
                                    {/*    title={"State"}*/}
                                    {/*    name={'state'}*/}
                                    {/*    require*/}
                                    {/*    onChange={(e) => {*/}
                                    {/*        setFieldValue('state', e)*/}
                                    {/*    }}*/}
                                    {/*    onBlur={() => {*/}
                                    {/*        setTouched({...touched, state: true})*/}
                                    {/*    }}*/}
                                    {/*    options={[{name: 'NY'}, {name: 'CA'}]}*/}
                                    {/*    error={touched.state && errors.state}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Zip Code'}*/}
                                    {/*    name={'zipCode'}*/}
                                    {/*    value={values.zipCode}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'text'}*/}
                                    {/*    error={touched.zipCode && errors.zipCode}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'SSN, last 4 digits'}*/}
                                    {/*    name={'SSN'}*/}
                                    {/*    value={values.SSN}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    type={'number'}*/}
                                    {/*    error={touched.SSN && errors.SSN}*/}
                                    {/*/>*/}
                                    {/*<Select*/}
                                    {/*    title={"Race"}*/}
                                    {/*    name={'race'}*/}
                                    {/*    require*/}
                                    {/*    onChange={(e) => {*/}
                                    {/*        setFieldValue('race', e)*/}
                                    {/*    }}*/}
                                    {/*    onBlur={() => {*/}
                                    {/*        setTouched({...touched, race: true})*/}
                                    {/*    }}*/}
                                    {/*    options={[{name: 'European'}, {name: 'Indian'}]}*/}
                                    {/*    error={touched.race && errors.race}*/}
                                    {/*/>*/}
                                    {/*<Input*/}
                                    {/*    label={'Email'}*/}
                                    {/*    name={'email'}*/}
                                    {/*    value={values.email}*/}
                                    {/*    onChange={handleChange}*/}
                                    {/*    onBlur={handleBlur}*/}
                                    {/*    error={touched.email && errors.email}*/}
                                    {/*    require*/}
                                    {/*/>*/}
                                    {/*<Select*/}
                                    {/*    title={"Ethnicity"}*/}
                                    {/*    name={'ethnicity'}*/}
                                    {/*    require*/}
                                    {/*    onChange={(e) => {*/}
                                    {/*        setFieldValue('ethnicity', e)*/}
                                    {/*    }}*/}
                                    {/*    onBlur={() => {*/}
                                    {/*        setTouched({...touched, ethnicity: true})*/}
                                    {/*    }}*/}
                                    {/*    options={[{name: '1'}, {name: '2'}]}*/}
                                    {/*    error={touched.ethnicity && errors.ethnicity}*/}
                                    {/*/>*/}


                                    {/*<Field*/}
                                    {/*    as={Select}*/}
                                    {/*    name={'sex'}*/}
                                    {/*    options={[{name: 'male'}, {name: 'female'}]}*/}
                                    {/*    title={"Sex"}*/}
                                    {/*    require*/}
                                    {/*/>*/}


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
