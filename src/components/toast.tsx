import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {colors} from '../constants/colors';

const Toast = ({toast}) => {
  return (
    <View style={{...styles.container, backgroundColor: colors.brand['50']}}>
      <View style={styles.hr}></View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>{toast.message}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    width: '99%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'IBMPlexSans',
  },
  container: {
    overflow: 'hidden',
    width: '80%',
    borderRadius: 4,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.brand["50"],
    // elevation: 1,
    // borderWidth: 1,
  },
  hr: {
    height: 70,
    width: 5,
    borderRadius: 3,
    backgroundColor: colors.blue["50"],
  },
});
export default Toast;
