
import React from 'react';
import { StyleSheet } from 'react-native';
import Dash from 'react-native-dash';
import { BORDER_COLOR } from '../../styles/Colors';

const Seperator =   (props) => {
    return (
        <Dash style={[styles.seperator, props.style]} dashThickness={1} dashColor={BORDER_COLOR} />
    )
}

const styles = StyleSheet.create({
    seperator: {
        marginTop: 30,
    }
})
export default Seperator;