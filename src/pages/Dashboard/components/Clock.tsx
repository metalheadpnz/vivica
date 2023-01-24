import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';

type dateFormat = {
    time: string
    day: string
    date: string
}


// type FormatDateType = 'DD:MM:YYYY'|undefined
//
// function formatDate_(date:Date,format:FormatDateType){
//
//     function getTime(){
//
//     }
//
//     function getDay(){
//
//     }
//
//     return {
//         getTime,
//         getDay
//     }
//
// }


const days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']

const formatDate: (date: Date) => dateFormat = (date) => ({
    time: date.toString().slice(16, 21),
    day: days[date.getDay()],
    date: `${date.toString().slice(8, 10)}/${months[date.getMonth()]}/${date.getFullYear().toString()}`
})

export const Clock = () => {
    const [date, setDate] = useState<dateFormat>(formatDate(new Date()))

    useEffect(() => {
        const refreshIntervalId = setInterval(() => {
               setDate(formatDate(new Date()))
        }, 1000)
        return () => clearInterval(refreshIntervalId)
    }, [])

    return (
        <div className={s.clock}>
            <span className={s.time}>{date.time}</span>
            <div className={s.date}>
                <div>{date.day}</div>
                <div>{date.date}</div>
            </div>
        </div>
    );
}