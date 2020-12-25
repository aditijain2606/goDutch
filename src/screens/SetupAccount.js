import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    ScrollView
} from 'react-native';
import { BORDER_COLOR, BUTTON_BACKGROUND, TEXT_INPUT_COLOR } from '../../styles/Colors';
import { MONTSERRAT_REGULAR } from '../../styles/Fonts';
import localizations from '../../utils/localizations';
import { windowHeight, windowWidth } from '../../utils/Utility';
import BackgroundCard from '../Components/BackgroundCard';
import Button from '../Components/Button';
import InputFieldLabel from '../Components/InputFieldLabel';
import InputText from '../Components/InputText';

const SetupAccount = (props) => {

    const [fullName, setFullName] = useState('')
    const [upiId, setUpiId] = useState('')
    const [profession, setProfession] = useState('Student')

    return (
        <>
        <ScrollView style={{flex: 1}}>
            <InputFieldLabel text={localizations.setup_account}
                style={styles.setupText} />
            <BackgroundCard style={styles.mainView}>
                <InputFieldLabel style={styles.professionText} text={localizations.current_profession} />
                <View style={styles.optionsView}>
                    <TouchableOpacity style={[styles.options, profession == 'Student' ? styles.optionsSelected : styles.optionsDeselected]}
                        onPress={() => { setProfession('Student') }} >
                        <Text style={[styles.optionsText, profession == 'Student' ? styles.optionsTextSelected : styles.optionsTextDeselected]}>{localizations.student}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.options, profession == 'Professional' ? styles.optionsSelected : styles.optionsDeselected]}
                        onPress={() => { setProfession('Professional') }} >
                        <Text style={[styles.optionsText, profession == 'Professional' ? styles.optionsTextSelected : styles.optionsTextDeselected]}>{localizations.professional}</Text>
                    </TouchableOpacity>
                </View>
                <InputFieldLabel text={localizations.full_name}
                    isMandatory={true} />
                <InputText value={fullName}
                    onChangeText={text => setFullName(text)}
                />

                <InputFieldLabel text={localizations.upi_id_caps}
                    isMandatory={true} />
                <InputText value={upiId}
                    onChangeText={text => setUpiId(text)}
                />
                <Button style={{ marginVertical: 50 }} text={localizations.continue}
                    onPress={() => {
                        onContinue()
                    }} />
            </BackgroundCard>
            </ScrollView>
        </>
    )

    function onContinue() {
        if (fullName.length != 0 && upiId.length != 0) {
            props.navigation.navigate('DetailsInput', {
                mobileNumber: props.route.params ? props.route.params.mobileNumber : '',
                fullName: fullName,
                upiId: upiId,
                profession: profession
            })
        }
    }
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginBottom: windowHeight() * 0.04,
    },
    professionText: {
        marginTop: windowHeight() * 0.2
    },
    setupText: {
        marginVertical: 15,
        marginHorizontal: windowWidth() * 0.0278
    },
    optionsView: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    options: {
        flex: 0.48,
        height: 45,
        justifyContent: "center",
        borderWidth: 1,
        borderRadius: 5,
        marginTop: 6,
    },
    optionsSelected: {
        borderColor: BUTTON_BACKGROUND,
    },
    optionsDeselected: {
        borderColor: BORDER_COLOR
    },
    optionsText: {
        fontFamily: MONTSERRAT_REGULAR,
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 19,
        textAlign: "center"
    },
    optionsTextSelected: {
        color: BUTTON_BACKGROUND
    },
    optionsTextDeselected: {
        color: TEXT_INPUT_COLOR
    }
});
export default SetupAccount;