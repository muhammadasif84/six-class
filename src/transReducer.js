
const TransactionReducer = ((state, action)=>{
    switch(action.type){
        case "Add":{
            return[action.payload, ...action]
        }
        default:
            return state;
    }
})


export default TransactionReducer;