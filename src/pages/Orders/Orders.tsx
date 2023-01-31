import React, {useState} from 'react';
import s from "./Orders.module.scss";
import {Button} from "../../components/Button/Button";
import {ReactComponent as Plus} from "../../assets/images/Plus.svg";
import {ReactComponent as Magnifier} from "../../assets/images/magnifier.svg";
import {ReactComponent as CircularArrow} from "../../assets/images/circularArrow.svg";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.scss"
import {ReactComponent as Arrows} from "../../assets/images/Arrows2ways.svg";
import {Table} from "../../components/Table/Table";
import {Input as Input} from "../../components/Input/Input";
import {Select} from "../../components/Select/Select";

type ChangeDateType = (date: [(Date | null), (Date | null)], event: React.SyntheticEvent<any, Event> | undefined) => void

const tableHeaders = [
    {title: 'Requisition ID'},
    {title: 'Patient', icon: Arrows},
    {title: 'Created Date', icon: Arrows},
    {title: 'Ordering Provider'},
    {title: 'Status'},
    {title: 'Expected Date', icon: Arrows},
]

const tableRows = [
    ['1115697', 'Amanda Jonson, 12/05/1996, ID 1564896', '07/03/2022', 'Brackenridge Field Laboratory', 'Complete', '07/01/2022'],
    ['1115697', 'Amanda Jonson, 12/05/1996, ID 1564896', '07/03/2022', 'Brackenridge Field Laboratory', 'Complete', '07/01/2022'],
    ['1115697', 'Amanda Jonson, 12/05/1996, ID 1564896', '07/03/2022', 'Brackenridge Field Laboratory', 'Complete', '07/01/2022'],
    ['1115697', 'Amanda Jonson, 12/05/1996, ID 1564896', '07/03/2022', 'Brackenridge Field Laboratory', 'Complete', '07/01/2022'],
    ['1115697', 'Amanda Jonson, 12/05/1996, ID 1564896', '07/03/2022', 'Brackenridge Field Laboratory', 'Complete', '07/01/2022'],
    ['1115697', 'Amanda Jonson, 12/05/1996, ID 1564896', '07/03/2022', 'Brackenridge Field Laboratory', 'Complete', '07/01/2022'],
]

export const Orders = () => {
    const [input, setInput] = useState('')
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);


    const onChange: ChangeDateType = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };
    const [Status, setStatus] = useState<string>('')
    const [provider, setProvider] = useState<string>('')

    const clearFilters = () => {
        setInput('')
        setStartDate(null)
        setEndDate(null)
        setStatus('')
        setProvider('')
    }
    return (
        <>
            <div className={s.patientsHeader}>
                <span className={s.title}>Orders</span>
                <Button title={' New order'}
                        frontImg={<Plus/>}
                        onClick={() => console.log('new order')}
                        color='secondary'
                />
            </div>

            <div className={s.tableWrap}>
                <div className={s.searchBlock}>
                    <div className={s.patientInputSearch}>
                        <Magnifier/>
                        <Input placeholder={'Patient'}
                               onChange={e => setInput(e.currentTarget.value)}
                               style={{width: '100%'}}
                               value={input}/>
                    </div>
                    <div style={{minWidth: '300px', flexGrow: '1'}}>
                        <Select title={'Ordering Provider'}
                            // style={{minWidth: '300px', flexGrow: '1'}}
                                style={{minWidth: '100%'}}
                                placeholder={'Placeholder'}
                                options={[{name: 'Provider A'}, {name: 'Provider B'}]}
                                value={provider}
                                onChange={(e) => {
                                     setProvider(e.currentTarget.innerText)
                                 }}
                        />
                    </div>
                    <div style={{minWidth: '300px', flexGrow: '1'}}>
                        <Select title={'Status'}
                                style={{minWidth: '100%', flexGrow: '1'}}
                                placeholder={'Placeholder'}
                                options={[{name: 'status1'}, {name: 'status2'}]}
                                value={Status}
                                onChange={(e) => {
                                     setStatus(e.currentTarget.innerText)
                                 }}
                        />
                    </div>
                    <div className={s.datePicker}>

                        <DatePicker
                            className={'test'}
                            customInput={<Input style={{width: '100%'}} label={'Created Date'}/>}
                            monthsShown={2}
                            dateFormat={'dd/MM/yyyy'}
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            placeholderText={'00/00/00 - 00/00/00'}
                         />
                    </div>

                    <div className={s.buttons}>
                        <Button
                            onClick={clearFilters}
                            style={{marginRight: '18px'}}
                            variant='outlined'
                            color='primary'
                            frontImg={<CircularArrow/>}
                        />
                        <Button
                            color='primary'
                            title='Apply'
                            variant='solid'
                        />
                    </div>
                </div>

                <Table tableHeaders={tableHeaders} tableRows={tableRows}/>

            </div>
        </>
    );
}
