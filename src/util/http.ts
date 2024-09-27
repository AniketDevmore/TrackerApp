import axios from "axios"
import { url } from "./constants"

export const storeExpenses = async (expenseData: any) => {
    const response = await axios.post(`${url}/expenses.json`, expenseData);
    const id = response.data.name;
    return id;
}

export const getExpenses = async (expenseData: any) => {
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

export const updateExpense = (id: any, expenseData: any) => {
    return axios.post(url + `/expenses/${id}.json`, expenseData)

}

export const deleteExpense = (id: any) => {
    return axios.delete(url + `/expenses/${id}.json`)
}