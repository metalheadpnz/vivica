import React from 'react';
import {useNavigate} from "react-router-dom";
import s from './AddPatient.module.scss'
import {Input2 as Input} from "../../components/Input2/Input2";
import {ReactComponent as Arrow} from "../../../src/assets/images/arrow.svg";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {Select} from "../../components/Select/Select";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const formFields = [
    {name: 'firstName', label: 'First Name', require: true, type: 'text', options: []},
    {name: 'lastName', label: 'Last Name', require: false, type: 'text', options: []},
    {name: 'middleName', label: 'Middle Name', require: false, type: 'text', options: []},
    {name: 'dateOfBirth', label: 'Date Of Birth', require: false, type: 'date', options: []},
    {name: 'sex', label: 'Sex', require: true, type: 'select', options: [{name: 'male'}, {name: 'female'}]},
    {name: 'cellPhone', label: 'Cell Phone', require: true, type: 'number', options: []},
    {name: 'secondaryPhone', label: 'Secondary Phone', require: false, type: 'number', options: []},
    {
        name: 'country',
        label: 'Country',
        require: false,
        type: 'select',
        options: [{name: 'RU'}, {name: 'KZ'}, {name: 'US'}]
    },
    {name: 'addressStreet', label: 'Address/Street 1', require: false, type: 'text', options: []},
    {name: 'addressStreet2', label: 'Address/Street 2', require: false, type: 'text', options: []},
    {name: 'city', label: 'City', require: false, type: 'select', options: [{name: 'NY'}, {name: 'LA'}]},
    {name: 'state', label: 'State', require: false, type: 'select', options: [{name: 'NY'}, {name: 'LA'}]},
    {name: 'zipCode', label: 'Zip Code', require: false, type: 'number', options: []},
    {name: 'SSN', label: 'SSN, last 4 digits', require: false, type: 'number', options: []},
    {name: 'race', label: 'Race', require: false, type: 'select', options: [{name: 'European'}, {name: 'Indian'}]},
    {name: 'email', label: 'Email', require: false, type: 'text', options: []},
    {name: 'ethnicity', label: 'Ethnicity', require: false, type: 'select', options: [{name: '1'}, {name: '2'}]},
] as const

//const initialValue: { [key: string]: string } = {}
const initialValue: Record<string, string> = {}

const initialValues = formFields.reduce((acc, {name}) => ({...acc, [name]: ''}), initialValue)


const SignupSchema = Yup.object().shape(
    {
        firstName: Yup.string().max(10, 'too long').required().label('First Name'),
        dateOfBirth: Yup.date().max(new Date(Date.now() - 567648000000), "You must be at least 18 years").required().label('Date of Birth'),
        lastName: Yup.string().max(10, 'too long').required().label('Last Name'),
        middleName: Yup.string().max(50, 'to long').label('Middle Name'),
        sex: Yup.string().required().label('Sex'),
        cellPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required().min(11, 'Phone number is not valid').max(11, 'Phone number is not valid').label('Cell Phone'),
        secondaryPhone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required().min(11, 'Phone number is not valid').max(11, 'Phone number is not valid').label('Cell Phone'),
        country: Yup.string().label('Country'),
        addressStreet: Yup.string().max(50, 'to long').label('Address'),
        addressStreet2: Yup.string().max(50, 'to long').label('Address'),
        city: Yup.string().label('City'),
        state: Yup.string().label('State'),
        zipCode: Yup.string().max(11, 'to long').label('Zip Code'),
        SSN: Yup.string().max(4, 'must be 4 digits').min(4, 'must be 4 digits').label('SSN'),
        race: Yup.string().label('Race'),
        email: Yup.string().email('Must be a valid email').max(255).label('Email'),
        ethnicity: Yup.string().label('Ethnicity'),
    }
)

export const AddPatient = () => {
    const navigation = useNavigate()
    const changeLocationHandler = () => {
        navigation('/patients')
    }

    const formik = useFormik({
        initialValues,
        onSubmit: values => console.log(values),
        validationSchema: SignupSchema
    })

    const {handleSubmit, setFieldValue, setTouched, touched, errors, values, handleChange, handleBlur} = formik

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

                <form onSubmit={handleSubmit} className={s.patientInformation}>

                    {formFields.map(f => (f.type === 'select')
                        ? <Select
                            title={f.label}
                            name={f.name}
                            require={f.require}
                            onChange={(e) => {
                                setFieldValue(f.name, e)
                            }}
                            onBlur={() => {
                                setTouched({...touched, [f.name]: true})
                            }}
                            //@ts-ignore
                            options={f.options}
                            error={touched[f.name] && errors[f.name]}
                        />
                        : <Input
                            style={{marginBottom:'32px', height:'48px',}}
                            key={f.name}
                            label={f.label}
                            type={f.type}
                            name={f.name}
                            value={values[f.name]}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // error={ (values[f.name] || touched[f.name]) && errors[f.name]}
                            error={touched[f.name] && errors[f.name]}
                            require={f.require}
                        />
                    )}
                    <button type='submit'>btn</button>

                </form>

            </div>

        </div>
    );
}
