import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import { colors } from "../../assets/Colors";

const ErrorOverlay = ({ message, onConfirm }: any) => {

    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.title]}>An error occurred!</Text>
            <Text style={styles.text}>{message}</Text>
        </View>
    )
}

export default ErrorOverlay;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: colors.primary700
    },
    text:{
        color:'#fff',
        textAlign: 'center',
        marginBottom: 8
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold'
    },
})