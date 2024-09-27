import { useContext, useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native"
import IconButton from "../components/UI/IconButton";
import { colors } from "../assets/Colors";
import Button from "../components/UI/Button";
import { ExpensesContext } from "../store/expenses-context";
import ExpenseForm from "../components/ExpenseForm/ExpenseForm";
import { deleteExpense, storeExpenses, updateExpense } from "../util/http";

const ManageExpense = ({ route, navigation }: any) => {
    const expensesCtx = useContext(ExpensesContext);
    const editedExpenseId = route.params?.expenseId;
    const isEditing = !!editedExpenseId;

    const selectedExpense = expensesCtx.expenses.find((expense: any) => expense.id === editedExpenseId)

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? "Edit Expense" : "Add Expense"
        })
    }, [navigation, isEditing]);

    const deleteHandler = async () => {
        expensesCtx.deleteExpense(editedExpenseId)
        await deleteExpense(editedExpenseId);
        navigation.goBack();

    }
    const cancelHandler = () => {
        navigation.goBack();

    }
    const confirmHandler = async (expenseData: any) => {
        if (isEditing) {
            expensesCtx.updateExpense(editedExpenseId, expenseData);
            await updateExpense(editedExpenseId, expenseData);

        } else {
            const id = await storeExpenses(expenseData)
            expensesCtx.addExpense({ ...expenseData, id: id });
        }
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <ExpenseForm onCancel={cancelHandler} submitButtonLable={isEditing ? 'Update' : 'Add'} onSubmit={confirmHandler}
                defaultValue={selectedExpense}
            />
            {/* <View style={styles.buttonContainer}>
                <Button style={styles.button} mode={'flat'} onPress={cancelHandler}>Cancel</Button>
                <Button style={styles.button} onPress={confirmHandler}>{isEditing ? 'Update' : 'Add'}</Button>
            </View> */}
            {
                isEditing &&
                <View style={styles.deleteContainer}>
                    <IconButton icon={'trash'} color={colors.error500} size={36} onPress={deleteHandler} />
                </View>
            }
        </View>
    )
}

export default ManageExpense;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: colors.primary800
    },
    // buttonContainer: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    // },
    // button:{
    //     minWidth: 120,
    //     marginHorizontal: 8
    // },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: colors.primary200,
        alignItems: 'center'
    }
})