import React from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {Button} from "../../components/Button/Button";
import {decrement, increment} from "../../redux/results/resultsSlice";
import {loadTodos} from "../../redux/results/actions";


export const Results = () => {
    const counter = useAppSelector(state => state.results.value)
    const data = useAppSelector(state => state.results.data)
    console.log(data)
    const dispatch = useAppDispatch()

    const inc = () => {
        dispatch(increment())
    }

    const dec = () => {
        dispatch(decrement())
    }

    const buttonHandler = () => {
        dispatch(loadTodos())
    }

    return (
        <div>
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
            <div style={{marginTop: '30px'}}>
                <Button
                    onClick={buttonHandler}
                    title={'fetch'}
                    color={'secondary'}/>
            </div>

            <div>
                <ul>
                    {data.map(todo => <li key={todo.id}>{todo.title}</li>)}
                </ul>
            </div>
        </div>

    );
};