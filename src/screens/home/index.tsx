import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {ScaledSheet} from 'react-native-size-matters';

import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import CustomHeader from '../../components/customHeader';
import {colors} from '../../constants/colors';
import SearchBar from '../../components/searchBar';
import SubHeader from '../../components/subHeader';
import ProductItem from '../../components/ProductItem';
import {UseGetAllProducts} from '../../hooks/useGetAllProducts';

interface props {
  navigation: NavigationProp<ParamListBase>;
}
const list = [1, 2, 3];
const Home: React.FC<props> = ({navigation}) => {
  const {isLoading, getAllProducts, data} = UseGetAllProducts();

  return (
    <View style={styles.container}>
      <CustomHeader
        navigation={navigation}
        showIcon={true}
        showNav={false}
        title="DELIVERY ADDRESS"
        subTitle="Umuezike Road, Oyo State"
      />

      <View style={styles.spacingTop}></View>
      <SearchBar />
      <SubHeader title="Technology" showNav navigation={navigation} />
      <View style={styles.wrapper}>
        {isLoading ? (
          <ActivityIndicator
            color={colors.blue['50']}
            size={30}
            style={{marginTop: 30}}
          />
        ) : (
          <FlatList
            numColumns={2}
            data={data}
            renderItem={render => (
              <ProductItem
                navigation={navigation}
                id={render?.item?.id}
                image={render?.item?.image}
                title={render.item.name}
                price={render.item.price}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: colors.brand['50'],
  },
  wrapper: {
    alignItems: 'center',
    paddingBottom: 180,
  },
  spacingX: {
    height: '10@vs',
  },
  spacingTop: {
    height: '8@vs',
  },
});

export default Home;
