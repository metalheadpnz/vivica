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
import {Input as InputTemp} from "../../components/Input/Input";


const tableHeaders = [
    {title: 'Requisition ID'},
    {title: 'Requisition ID', icon: Arrows},
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

    // const [startDate, setStartDate] = useState(new Date("2014/01/01"));
    // const [endDate, setEndDate] = useState(new Date("2014/01/02"));

    const [startDate, setStartDate] = useState(new Date("2023/01/03"));
    //const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(new Date("2023/01/05"));
    //@ts-ignore
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <>
            <div className={s.patientsHeader}>
                <span className={s.title}>Orders</span>
                <Button title={'New order'}
                        frontImg={<Plus/>}
                        callback={() => console.log('new order')}
                />
            </div>

            <div className={s.tableWrap}>
                <div className={s.searchBlock}>
                    <InputTemp placeholder={'Patient'}
                           IconStart={<Magnifier/>}
                           onChange={e => setInput(e.currentTarget.value)}
                           style={{width: '300px'}}
                           value={input}/>

                    <Select title={"Ordering Provider"}
                            options={[{name: 'option1'}, {name: 'option2'}]} width={'300px'}/>

                    <Select title={"Ordering Provider"}
                            options={[{name: 'status1'}, {name: 'status2'}]} width={'300px'}/>


                    <div className={s.datePicker}>

                        <DatePicker
                            className={'test'}
                            customInput={<Input style={{width: '320px'}} label={'Created Date'}/>}
                            monthsShown={2}
                            dateFormat={'dd/MM/yyyy'}
                            selected={startDate}
                            onChange={onChange}
                            startDate={startDate}
                            endDate={endDate}
                            selectsRange
                            // inline
                        />

                        {/*<DatePicker*/}
                        {/*    monthsShown={2}*/}
                        {/*    selected={startDate}*/}
                        {/*    onChange={(date) => setStartDate(date as Date)}*/}
                        {/*    selectsStart*/}
                        {/*    startDate={startDate}*/}
                        {/*    endDate={endDate}*/}
                        {/*/>*/}

                    </div>

                    <div className={s.buttons}>
                        <div className={s.refreshBtn}>
                            <CircularArrow/>
                        </div>
                        <Button title={'Apply'} style={{backgroundColor: '#A81D42'}}/>
                    </div>
                </div>

                <Table tableHeaders={tableHeaders} tableRows={tableRows}/>

            </div>
        </>
    );
}
