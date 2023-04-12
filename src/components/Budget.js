import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,currency,dispatch,expenses } = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);


    const handleBudgetChange = (value) => {
        let newBudget
        if(value>budget){
            newBudget = budget + 10;
        } else if(value<budget){
            newBudget = budget - 10;
        }

        if (newBudget < totalExpenses) {
            newBudget = totalExpenses;
            alert('Budget cannot be less than total expenses')
        } else if (newBudget > 20000) {
            newBudget = 20000;
            alert('Budget cannot be more than 20,000')
        }



        console.log(newBudget);
        dispatch({
            type: 'SET_BUDGET',
            payload: newBudget
        });
    }


    return (
        <div className='alert alert-secondary row'>
            <span>Budget: {currency} 
            <input 
            type='number' 
            style={{marginLeft: '0.5rem', size: 10, width: '50%', alignSelf: 'center', textAlign: 'center'}} 
            value={budget}
            onChange={(event) => handleBudgetChange(event.target.value)}>
            </input>
            
            
            
            
            </span>
        </div>
    );
};
export default Budget;
