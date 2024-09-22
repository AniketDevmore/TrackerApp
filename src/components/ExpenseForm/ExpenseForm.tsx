import { Alert, Keyboard, Text, View } from "react-native"
import Input from "../Input/Input";
import { colors } from "../../assets/Colors";
import styles from "./ExpenseForm.styles";
import { useState } from "react";
import Button from "../UI/Button";

const ExpenseForm = ({onCancel, onSubmit, submitButtonLable, defaultValue}:any) => {
    const [input, setInput] = useState<any>({
        amount: {value: defaultValue ? defaultValue.amount.toString() : '', isValid: true },
        date: {value: defaultValue ? defaultValue.date.toISOString() : '', isValid: true },
        description: {value: defaultValue ? defaultValue.description : '', isValid: true }
    })
    const inputChangeHandler = (inputIndentifier: any, enteredAmount: any) => {
        setInput((currentValue: any) => {
            return {
                ...currentValue,
                [inputIndentifier]: {value: enteredAmount, isValid:  true}
            }
        });
    };

    const submitHandler = () =>{
        const expenseData = {
            amount: +input.amount.value,
            date: new Date(input.date.value),
            description: input.description.value
        }

        const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
        const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
        const descIsValid = expenseData.description.trim().length > 0;

        if(!amountIsValid || !dateIsValid || !descIsValid){
            // Alert.alert("Invalid Input, Please check your input values")
            setInput((curInput:any) => {
                return {
                amount: {value: curInput.amount.value, isValid: amountIsValid},
                date: {value: curInput.date.value, isValid: dateIsValid},
                description: {value: curInput.description.value, isValid: descIsValid},
                }
            })
            return;
        }
        onSubmit(expenseData);
    }
    

    const formIsInvalid = !input.amount.isValid || !input.date.isValid || !input.description.isValid;

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.inputRow}>
                <Input label={'Amount'}
                invalid={!input.amount.isValid}
                textInputConfig={{
                    keyboardType: 'decimal-pad',
                    onChangeText: inputChangeHandler.bind(this, 'amount'),
                    value: input.amount.value
                }}
                    styles={styles.rowInput}
                />
                <Input label={'Date'}
                invalid={!input.date.isValid}
                textInputConfig={{
                    placeholder: 'YYYY-MM-DD',
                    placeholderTextColor: colors.primary200,
                    maxLength: 10,
                    onChangeText: inputChangeHandler.bind(this, 'date'),
                    value: input.date.value
                }}
                    styles={styles.rowInput}
                />
            </View>
            <Input label={'Description'} 
            invalid={!input.description.isValid}
            textInputConfig={{
                multiline: true,
                onChangeText: inputChangeHandler.bind(this, 'description'),
                value: input.description.value
                // autoCapitalize: 'none'
                // autocorrect: false
            }} />
            {formIsInvalid && <Text style={styles.errorText}>Invalid input values - Please check your entered data!</Text>}
            <View style={styles.buttonContainer}>
                <Button style={styles.button} mode={'flat'} onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLable}</Button>
            </View>
        </View>
    )
}

export default ExpenseForm;