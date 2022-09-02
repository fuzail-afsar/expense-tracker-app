import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState();
    const [amount, setAmount] = useState();

    const { addTransaction } = useContext(GlobalContext);
    let [count, setCount] = useState(0);
    const onSubmit = e =>{
        e.preventDefault();
        if(text && amount){
            setCount(++count);
            const newTransaction = {
                id: count,
                text,
                amount: +amount
            }
        addTransaction(newTransaction);
        setText("");
        setAmount("");
        } else{
            alert("Please fill all fields");
        }
    }
    return (
        <div>
            <h3>Add New Add Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor = "description">Description</label>
                    <input type="text" value= { text } onChange={ (e)=>setText(e.target.value) } placeholder="Enter Text" />
                </div>
                <div className="form-control">
                    <label htmlFor = "amount">
                        Amount
                        <br />
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={ amount } onChange={ (e)=>setAmount(e.target.value) } placeholder="Enter Amount" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
