
import React, { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
} from 'react-native';
import { windowHeight } from '../../utils/Utility';
import BackgroundCard from '../Components/BackgroundCard';
import localizations from '../../utils/localizations';
import InputFieldLabel from '../Components/InputFieldLabel';
import InputText from '../Components/InputText';
import Button from '../Components/Button';
import Seperator from '../Components/Seperator';


const Login = (props) => {
    const [mobileNumber, setMobileNumber] = useState('')

    return (
        <>
        <ScrollView style={{flex: 1}}>
            <BackgroundCard style={styles.loginView}>
                <View style={styles.headerView}>
                    <Image source={require('../../assets/images/goDutch_logo.png')}
                        style={styles.logoImage} />
                    <Image source={require('../../assets/images/goDutch.png')}
                        style={styles.logoText} />
                </View>
                <Seperator />
                <InputFieldLabel text={localizations.mobile_number}
                    isMandatory={true}
                    style={{ marginTop: 45 }} />
                <InputText value={mobileNumber}
                    onChangeText={text => setMobileNumber(text)}
                    maxLength={10}
                    keyboardType={"number-pad"} />
                <Button style={{ marginVertical: 50 }} text={localizations.continue}
                    onPress={() => {
                        onContinue()
                    }} />
            </BackgroundCard>
            </ScrollView>
        </>
    );

    function onContinue() {
        if (mobileNumber.length == 10 && /^\d+$/.test(mobileNumber)) {
            props.navigation.navigate('SetupAccount', {
                mobileNumber: mobileNumber
            })
        }
    }
};

const styles = StyleSheet.create({
    loginView: {
        flex: 1,
        marginVertical: windowHeight() * 0.24,
    },
    headerView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: windowHeight() * 0.025,
    },
    logoImage: {
        height: 37,
        width: 37,
    },
    logoText: {
        width: 140,
        height: 35,
        marginLeft: 10
    },
});

export default Login;
