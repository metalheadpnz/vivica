import React from 'react';
import s from './Table.module.scss'

type PropsType = {
    tableHeaders: Array<any>
    tableRows: Array<Array<any>>
}

export const Table = ({tableHeaders, tableRows}: PropsType) => {
    return (

        <table cellSpacing="0" className={s.test}>
            <tbody>
            <tr>
                {tableHeaders.map((h,i) =>
                    <th className={s.tHead} key={h.title+i.toString()}>{h.title}{h.icon && <h.icon/>}</th>
                )}
            </tr>
            {
                tableRows.map((row, index) => <tr key={index} className={s.tRow}>
                    {row.map((cell, i) => <td key={cell.toString()+i.toString()}>{cell}</td>)}
                </tr>)
            }
            </tbody>
        </table>
    );
}