
import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';
import { BUTTON_BACKGROUND, WHITE } from '../../styles/Colors';
import { MONTSERRAT_REGULAR } from '../../styles/Fonts';
import { windowWidth } from '../../utils/Utility';


const Button = (props) => {
    return (
        <>
            <TouchableOpacity style={[styles.button, props.style]}
                onPress={props.onPress} >
                <Text style={styles.text}>{props.text}</Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    text: {
        color: WHITE,
        textAlign: "center",
        fontFamily: MONTSERRAT_REGULAR,
        fontSize: 20,
        lineHeight: 23,
        fontWeight: "500",
    },
    button: {
        backgroundColor: BUTTON_BACKGROUND,
        height: 55,
        justifyContent: "center",
        borderRadius: 5,
        marginHorizontal: windowWidth() * 0.17
    }
});

export default Button;
