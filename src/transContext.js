import React, {createContext} from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
    {amount : 100 , desc: "Cash"},
    {amount : -40 , desc: "Books"},
    {amount : -200 , desc: "Camera"}
]

 export const TransactionContext = createContext(initialTransactions);


 


 export const TransactionProvider = ({}) => {
    let [state, dispatch] = createReducer(TransactionReducer, initialTransactions);
 }