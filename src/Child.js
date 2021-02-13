import React, { useContext } from 'react';
import './App.css';
import {TransactionContext} from './transContext';




const Child = () => {

  let transactions = useContext(TransactionContext);

        return (
    
        <div class="container">
            <h1 className="text-center"> Expense Tracker </h1>
            <h3> Your Balance <br/> $260 </h3>
        <div className="expense-container">
            <h3> Income <br/> $500 </h3>
            <h3> Expense <br/> $300 </h3>
        </div>
            <h3> History </h3>
            <hr/>
            <ul className="trasaction-list">
                {transactions.map((transObj, ind)=>{
                    return (
                        <li>
                    <span>{transObj.desc}</span>
                    <span> {transObj.amount} </span>
                </li>
                    )

                })}
                
            </ul>
            <h3> Add New Transaction </h3>
            <hr/>
            <form className="transaction-form">
                <label>
                Enter Description <br/>
                <input type="text" /> <br/>
                </label>
                <label>
                    Enter Amount <br/>
                    <input type="number"/> <br/>
                </label>
                <input type="submit" value="Add Transaction"/>
            </form>
        </div>
        )
}

export default Child;