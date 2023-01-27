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
                {tableHeaders.map(h =>
                    <th className={s.tHead}>{h.title}{h.icon && <h.icon/>}</th>
                )}
            </tr>
            {
                tableRows.map(row => <tr className={s.tRow}>
                    {row.map(cell => <td>{cell}</td>)}
                </tr>)
            }
            </tbody>
        </table>
    );
}