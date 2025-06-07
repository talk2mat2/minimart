import {View, Dimensions, Text, TouchableOpacity} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {colors} from '../constants/colors';
import {Image, StyleSheet} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

const ProductItem = ({
  title = 'Apple iPhone 16',
  subTitle = '256GB|Sky blue',
  price = '$700.00',
  image = '',
  navigation,
  id = '',
}: {
  title?: string;
  subTitle?: string;
  price?: string;
  image?: any;
  id: string;
  navigation: NavigationProp<ParamListBase>;
}) => {

  const handlenav = () => {
    navigation?.navigate('ProductDetail', {id: id});
  };

  return (
    <TouchableOpacity onPress={handlenav} style={styles.touch}>
      <View style={styles.container}>
        <Image style={styles.pic} source={image} />
        <View style={{margin: 'auto'}}>
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.sectionTitle}>{subTitle}</Text>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    // backgroundColor: colors.brand[50],
    height: '100%',
    width: '100%',
  },
  touch: {
    paddingVertical: '10@vs',
    backgroundColor: colors.neutral['350'],
    width: Dimensions.get('screen').width * 0.44,
    maxHeight: '223@vs',
    margin: 3,
    marginBottom: 5,
    aspectRatio: 0.5,
    alignItems: 'center',
  },
  pic: {
    width: '100%',
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '400',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
  price: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
  testWrapper: {
    alignItems: 'center',
  },
});
export default ProductItem;
