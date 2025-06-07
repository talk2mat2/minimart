import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../constants/colors';

const Btn = ({title, onPress}: {title: string; onPress?: () => void}) => {
  return (
    <TouchableOpacity onPress={() => onPress?.()} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    height: '40@vs',
    paddingHorizontal: 16,
    backgroundColor: colors.blue['50'],
    borderRadius: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'IBMPlexSans',
    color: colors.brand['50'],
  },
});

export default Btn;
