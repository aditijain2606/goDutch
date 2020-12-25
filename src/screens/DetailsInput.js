import { CommonActions } from '@react-navigation/native';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text
} from 'react-native';
import { DISPLAY_TEXT } from '../../styles/Colors';
import { MONTSERRAT_REGULAR } from '../../styles/Fonts';
import { navigationRef } from '../../utils/CommonRef';
import localizations from '../../utils/localizations';
import { windowHeight, windowWidth } from '../../utils/Utility';
import BackgroundCard from '../Components/BackgroundCard';
import Button from '../Components/Button';
import InputFieldLabel from '../Components/InputFieldLabel';
import Seperator from '../Components/Seperator';

const DetailsInput = (props) => {

    const [mobileNo, setMobileNo] = useState('')
    const [fullName, setFullName] = useState('')
    const [upiId, setUpiId] = useState('')
    const [profession, setProfession] = useState('')

    useEffect(()=>{
        
        if(props.route.params) {
            setMobileNo(props.route.params.mobileNumber)
            setFullName(props.route.params.fullName)
            setUpiId(props.route.params.upiId)
            setProfession(props.route.params.profession)
        }
    }, [])
    return (
        <>
        <ScrollView style={{flex: 1}}>
            <InputFieldLabel text={localizations.your_details}
                style={styles.yourDetails} />
            <BackgroundCard style={styles.mainView}>
                {detailsValue(localizations.name, fullName)}
                {detailsValue(localizations.mobile_no, localizations.mobileCode + mobileNo)}
                {detailsValue(localizations.upi_id, upiId)}
                {detailsValue(localizations.profession, profession)}
            </BackgroundCard>
            <Button style={{ marginBottom: 50 }} text={localizations.continue}
                onPress={() => {
                    onContinue()
                }} />
        </ScrollView>
        </>
    )

    function onContinue() {
        navigationRef.current?.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{name: 'Login'}],
            }),
          );
    }
}
const detailsValue = (text, value) => {
    return (
        <>
            <InputFieldLabel style={{marginTop: 10}} text={text} />
            <Seperator style={{marginTop: 16}} />
            <Text style={styles.detailsText}>{value}</Text>
            <Seperator style={{marginTop: 16}}/>
        </>
    )
}
const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        marginBottom: windowHeight() * 0.04,
        paddingBottom: 15
    },
    yourDetails: {
        marginVertical: 15,
        marginHorizontal: windowWidth() * 0.0278
    },

    detailsText: {
        fontFamily: MONTSERRAT_REGULAR,
        fontWeight: "500",
        fontSize: 15,
        lineHeight: 19,
        color: DISPLAY_TEXT,
        marginTop: 16
    }
});
export default DetailsInput;