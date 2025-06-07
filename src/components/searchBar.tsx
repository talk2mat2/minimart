import {View, StyleSheet, Text, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors} from '../constants/colors';
import SearchIcon from '../icons/search';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <SearchIcon />
      <TextInput style={styles.textBox} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: '44@vs',
    borderColor: colors.grey['150'],
    borderWidth: 2,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',

    borderRadius:5
  },
  textBox: {
    flex: 1,
    width: '100%',
  },
});
export default SearchBar;
