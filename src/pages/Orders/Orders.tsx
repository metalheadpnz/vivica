import React, {useState} from 'react';
import s from "./Orders.module.scss";
import {Button} from "../../components/Button/Button";
import {ReactComponent as Plus} from "../../assets/images/Plus.svg";
import {Input} from "../../components/Input/Input";
import {ReactComponent as Magnifier} from "../../assets/images/magnifier.svg";
import {ReactComponent as CircularArrow} from "../../assets/images/circularArrow.svg";
import {Select} from "../../components/Select/Select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {ReactComponent as Arrows} from "../../assets/images/Arrows2ways.svg";
import {Table} from "../../components/Table/Table";


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
]

export const Orders = () => {
    const [input, setInput] = useState('')

    const [startDate, setStartDate] = useState(new Date("2014/01/01"));
    const [endDate, setEndDate] = useState(new Date("2014/01/02"));

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
                    <Input placeholder={'Patient'}
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
                            selected={startDate}
                            onChange={(date) => setStartDate(date as Date)}
                            selectsStart
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date as Date)}
                            selectsEnd
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>

                    <div className={s.buttons}>
                        <div className={s.refreshBtn}>
                            <CircularArrow/>
                        </div>
                        <Button title={'Apply'} style={{backgroundColor: '#A81D42'}}/>
                    </div>
                </div>

                <div className={s.body}>

                    <Table tableHeaders={tableHeaders} tableRows={tableRows}/>


                </div>

            </div>
        </>
    );
}