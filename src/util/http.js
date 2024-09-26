import axios from "axios"
import { url } from "./constants"

export const storeExpenses = (expenseData) => {
    axios.post(`${url}/expenses.json`, expenseData)
}

export const getExpenses = async (expenseData) => {
    const response = await axios.get(`${url}/expenses.json`, expenseData)

    const expenses = [];
    console.log('response-------------->>', response.data)

    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description

        }
        expenses.push(expenseObj)
    }

    return expenses;
}