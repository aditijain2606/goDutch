
import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { WHITE } from '../../styles/Colors';
import { windowWidth } from '../../utils/Utility';


const BackgroundCard = (props) => {
  return (
    <>
      <View style={[styles.card, props.style]}>
      {props.children}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: WHITE,
    flex: 1,
    borderColor: "rgba(0, 0, 0, 0.15)",
    borderWidth: 3,
    borderRadius: 5,
    marginHorizontal: windowWidth() * 0.0278,
    paddingHorizontal: windowWidth() * 0.08,
  }
});

export default BackgroundCard;
