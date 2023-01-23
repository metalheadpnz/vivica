import React from 'react';
import s from './PatientsTable.module.scss'

export const PatientsTable = () => {
    return (
        <div className={s.test}>

            <table cellSpacing="0">
                <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Date of Birth</th>
                    <th>Sex</th>
                    <th>Cell Phone</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Patient chart</th>
                </tr>
                <tr>
                    <td>Adam</td>
                    <td>Johnson</td>
                    <td>10 March 1985</td>
                    <td>Male</td>
                    <td>+1 (908) 987-67-89</td>
                    <td>Adam123@gmail.ru</td>
                    <td>Boise</td>
                    <td>State of Idaho</td>
                    <td>Open</td>
                </tr>
                <tr>
                    <td>Bro***</td>
                    <td>Tay***</td>
                    <td>*************</td>
                    <td>Female</td>
                    <td>*****67-89</td>
                    <td>brow********</td>
                    <td>*************</td>
                    <td>*************</td>
                    <td>Request Access</td>
                </tr>
                </tbody>
            </table>

        </div>
    );
}