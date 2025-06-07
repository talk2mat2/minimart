import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet, scale} from 'react-native-size-matters';
import {colors} from '../constants/colors';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

import BtnBack from './btnBack';
import BellIcon from '../icons/bell';

interface Props {
  title: string;
  subTitle?: string;
  showNav: boolean;
  showIcon?: boolean;
  navigation: NavigationProp<ParamListBase>;
  ismodalHeader?: boolean;
}

const CustomHeader: React.FC<Props> = ({
  title,
  subTitle = '',
  showNav,
  showIcon = false,
  navigation,
  ismodalHeader = false,
}) => {
  return (
    <View style={[styles.container, {elevation: ismodalHeader ? 0 : 1}]}>
      {showNav ? (
        <BtnBack navigation={navigation} />
      ) : (
        <View style={{width: 20}} />
      )}

      <View style={styles.testWrapper}>
        <Text style={styles.title}>{title}</Text>
        {!!subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
      </View>

      {showIcon ? <BellIcon /> : <View style={{width: 20}} />}
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '52@s',
    backgroundColor: colors.brand[50],
    paddingVertical: '10@vs',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  testWrapper: {
    alignItems: 'center',
  },
  title: {
    fontSize: scale(10),
    fontWeight: '800',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['50'],
  },
  subTitle: {
    fontSize: scale(12),
    fontWeight: '800',
    marginTop: 7,
    fontFamily: 'IBMPlexSans',
    color: colors.grey['50'],
  },
});

export default CustomHeader;
