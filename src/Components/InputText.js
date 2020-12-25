
import React from 'react';
import {
    StyleSheet,
    TextInput,
} from 'react-native';
import { BORDER_COLOR, TEXT_INPUT_COLOR, WHITE } from '../../styles/Colors';
import { MONTSERRAT_REGULAR } from '../../styles/Fonts';


const InputText = (props) => {
    return (
        <>
            <TextInput {...props}
                editable
                style={styles.textInput} />
        </>
    );
};

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 5,
        backgroundColor: WHITE,
        height: 42,
        textAlign: "center",
        marginVertical: 6,
        color: TEXT_INPUT_COLOR,
        fontFamily: MONTSERRAT_REGULAR,
        fontSize: 15,
        lineHeight: 19
    }
});

export default InputText;
