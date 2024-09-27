import { ActivityIndicator, StyleSheet, View } from "react-native"
import { colors } from "../../assets/Colors";

const LoadingOverlay = () => {
    
    return(
        <View style={styles.container}>
            <ActivityIndicator size={'large'} color={'#fff'}/>
        </View>
    )
}

export default LoadingOverlay;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: colors.primary700
    }
})