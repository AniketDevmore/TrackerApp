import { Children } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native"
import { colors } from "../../assets/Colors";

const Button = ({ children, onPress, mode, style }: any) => {
    return (
        <View style={style}>
            <Pressable onPress={onPress} style={({pressed})=> pressed && styles.pressed}>
                <View style={[styles.button, mode === 'flat' && styles.flat]}>
                    <Text style={[styles.buttonText, mode === 'flat' && styles.flatText]}>{children}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        padding: 8,
        backgroundColor: colors.primary500
    },
    flat:{
        backgroundColor: 'transparent'
    },
    buttonText:{
        color: colors.whiteColor,
        textAlign: 'center'
    },
    flatText:{
        color: colors.primary200
    },
    pressed:{
        opacity: 0.75,
        backgroundColor: colors.primary100,
        borderRadius: 4
    }
})