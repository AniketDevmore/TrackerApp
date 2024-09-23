import axios from "axios"
import { url } from "./constants"

export const storeExpenses = (expenseData) => {
    axios.post(`${url}/expenses.json`, expenseData)
}