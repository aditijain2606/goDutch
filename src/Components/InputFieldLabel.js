
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { INPUT_TEXT_LABEL_COLOR, MADATORY_TEXT } from '../../styles/Colors';
import { MONTSERRAT_REGULAR } from '../../styles/Fonts';
import localizations from '../../utils/localizations';
import { renderIf } from '../../utils/Utility';


const InputFieldLabel = (props) => {
    return (
        <>
            <View style={[styles.view, props.style]}>
                <Text style={[styles.inputFieldText, { color: INPUT_TEXT_LABEL_COLOR }]}>{props.text}</Text>
                {renderIf(props.isMandatory, <Text style={[styles.inputFieldText, { color: MADATORY_TEXT }]}>{localizations.mandatory_asterisk}</Text>)}
            </View>
        </>
    );
};

const styles = StyleSheet.create({

    view: {
        flexDirection: "row",
        marginTop: 30
    },

    inputFieldText: {
        fontFamily: MONTSERRAT_REGULAR,
        fontSize: 14,
        lineHeight: 18,
        fontWeight: "500",
    }
});

export default InputFieldLabel;
