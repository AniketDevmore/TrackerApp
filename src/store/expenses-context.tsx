import { createContext, useReducer } from "react";

const DUMMY_EXPENSE = [
    {
        id:'1',
        description: 'Pair of Shoes',
        amount: 67.98,
        date: new Date('2024-9-09')
    },
    {
        id:'2',
        description: 'Pair of Shirts',
        amount: 34.98,
        date: new Date('2024-1-19')
    },
    {
        id:'3',
        description: 'Apple',
        amount: 4.98,
        date: new Date('2024-2-19')
    },
    {
        id:'4',
        description: 'Pair of Shoes',
        amount: 67.98,
        date: new Date('2024-9-09')
    },
    {
        id:'5',
        description: 'Pair of Shirts',
        amount: 34.98,
        date: new Date('2024-1-19')
    },
    {
        id:'6',
        description: 'Apple',
        amount: 4.98,
        date: new Date('2024-2-19')
    },
    {
        id:'7',
        description: 'Pair of Shoes',
        amount: 67.98,
        date: new Date('2024-9-09')
    },
    {
        id:'8',
        description: 'Pair of Shirts',
        amount: 34.98,
        date: new Date('2024-1-19')
    },
    {
        id:'9',
        description: 'Apple',
        amount: 4.98,
        date: new Date('2024-12-19')
    },
];

export const ExpensesContext = createContext({
    expenses: [],
    addExpenses: ({ description, amount, date }: any) => { },
    deleteExpense: (id: any) => { },
    updateExpense: (id: any, { description, amount, date }: any) => { }
});

const expenseReducer = (state: any, action: any) => {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random(). toString()
            return [{...action.payload, id:id}, ...state]
        case 'UPDATE':
            const updatebleExpenseIndex = state.findIndex((expense:any)=> expense.id === action.payload.id);

            const updatebleExpense = state[updatebleExpenseIndex]

            const updatebleItem = {...updatebleExpense, ...action.payload.data};
            const updatedExpenses = [...state];
            updatedExpenses[updatebleExpenseIndex] = updatebleItem;

            return updatedExpenses
        case 'DELETE':
            return state.filter((expense:any)=> expense.id !== action.payload)
        default:
            return state;
    }
}

const ExpensesContextProvider = ({ children }: any) => {

   const [expensesState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSE);

   const addExpense = (expenseData:any) => {
    dispatch({type: "ADD", payload: expenseData})
   }

   const deleteExpense = (id:any) => {
    dispatch({type: "DELETE", payload: id})
   }

   const updateExpense = (id:any, expenseData:any) => {
    dispatch({type: "UPDATE", payload: {id: id, data: expenseData}})
   }

   const value:any = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense
   };
    return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>
}

export default ExpensesContextProvider;