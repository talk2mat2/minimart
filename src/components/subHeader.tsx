import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {colors} from '../constants/colors';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import BtnBack from './btnBack';

interface Props {
  title: string;
  showNav: boolean;
  navigation: NavigationProp<ParamListBase>;
}

const SubHeader: React.FC<Props> = ({title, showNav, navigation}) => {
  return (
    <View style={styles.container}>
      {showNav ? (
        <BtnBack navigation={navigation} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '52@s',
    backgroundColor: colors.brand[50],
    paddingVertical: '10@vs',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: scale(18),
    fontWeight: '700',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
    marginLeft: 4,
  },
  placeholder: {
    width: scale(30),
  },
});

export default SubHeader;
