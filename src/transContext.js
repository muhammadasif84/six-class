import React, { createContext, useReducer } from 'react';
import TransactionReducer from './transReducer';

const initialTransactions = [
  { amount: 100, desc: "Cash" },
  { amount: -40, desc: "Books" },
  { amount: -200, desc: "Camera" }
]

export const TransactionContext = createContext(initialTransactions);





export const TransactionProvider = ({ children }) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transObj) {
    dispatch({
      type: "ADD TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc

      },
    })

  }
  return (
    <TransactionContext.Provider value={{
      transactions: state,
      addTransaction

    }}>
      {children}

    </TransactionContext.Provider>
  )
}
