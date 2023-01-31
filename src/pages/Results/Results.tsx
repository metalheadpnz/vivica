import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {Button} from "../../components/Button/Button";
import {decrement, increment} from "../../redux/results/resultsSlice";


export const Results = () => {
    const counter = useAppSelector(state => state.results.value)
    const dispatch = useAppDispatch()

    const inc = () => {
        dispatch(increment())
    }

    const dec = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <h1>{counter}</h1>
            <Button
                onClick={inc}
                title={'increment'}
                color={'secondary'}/>
            <Button
                onClick={dec}
                title={'decrement'}
                color={'primary'}/>
        </div>
    );
};