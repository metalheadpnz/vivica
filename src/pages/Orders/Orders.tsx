import React, {useState} from 'react';
import s from "./Orders.module.scss";
import {Button} from "../../components/Button/Button";
import {ReactComponent as Plus} from "../../assets/images/Plus.svg";
import {ReactComponent as Magnifier} from "../../assets/images/magnifier.svg";
import {ReactComponent as CircularArrow} from "../../assets/images/circularArrow.svg";
import {Select} from "../../components/Select/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.scss"
import {ReactComponent as Arrows} from "../../assets/images/Arrows2ways.svg";
import {Table} from "../../components/Table/Table";
import {Input2 as Input} from "../../components/Input2/Input2";

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

    const clearFilters = () => {
        setInput('')
        setStartDate(null)
        setEndDate(null)
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
                               style={{width: '272px'}}
                               value={input}/>
                    </div>

                    <Select title={"Ordering Provider"}
                            placeholder={'Placeholder'}
                            options={[{name: 'option1'}, {name: 'option2'}]} width={'300px'}/>

                    <Select title={"Ordering Provider"}
                            placeholder={'Placeholder'}
                            options={[{name: 'status1'}, {name: 'status2'}]} width={'300px'}/>


                    <div className={s.datePicker}>

                        <DatePicker
                            className={'test'}
                            customInput={<Input style={{width: '300px'}} label={'Created Date'}/>}
                            monthsShown={2}
                            dateFormat={'dd/MM/yyyy'}
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            placeholderText={'00/00/00 - 00/00/00'}
                            // inline
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
                            // style={{backgroundColor: '#A81D42'}}
                        />
                    </div>
                </div>

                <Table tableHeaders={tableHeaders} tableRows={tableRows}/>

            </div>
        </>
    );
}
