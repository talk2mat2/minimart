import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
  ScrollView,
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
import {UseGetAllProducts} from '../../hooks/useGetAllProducts';
import {UseGetProduct} from '../../hooks/useGetProducts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRoute} from '@react-navigation/native';
import HeartIcon from '../../icons/heart';
import Btn from '../../components/btn';
import CartItem from '../../components/cartItem';
import {data} from '../../api/data';
import UseAppContext from '../../hooks/useAppContext';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const Cart: React.FC<props> = ({navigation}) => {
  const {cart, subTotal} = UseAppContext();
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
      <SubHeader title="Your Cart" showNav navigation={navigation} />
      <View style={{height: '90%'}}>
        <View style={styles.wrapper}>
          {!cart.length ? (
            <View style={{marginTop: 20, width: '100%', alignItems: 'center'}}>
              <Text style={styles.price}>Your cart is empty</Text>
              <Icon size={50} name="baby-face-outline" />
            </View>
          ) : (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={cart}
              renderItem={render => <CartItem item={render.item} />}
              ListFooterComponentStyle={{maxWidth: 500}}
              ListFooterComponent={() => (
                <View style={{marginBottom: 100}}>
                  <Text style={styles.price}>Order Info</Text>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 20,
                    }}>
                    <Text style={styles.subprice}>Subtotal</Text>
                    <Text style={styles.subprice}>${subTotal()}</Text>
                  </View>

                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 20,
                    }}>
                    <Text style={styles.subprice}>Shipping</Text>
                    <Text style={styles.price}>$10</Text>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 20,
                    }}>
                    <Text style={styles.subprice}>Total</Text>
                    <Text style={styles.subprice}>${subTotal() + 10}</Text>
                  </View>
                  <View style={styles.btnSection}>
                    <Btn title={`Checkout ($ ${ subTotal() + 10})`} />
                  </View>
                </View>
              )}
            />
          )}
        </View>
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
  price: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
  subprice: {
    fontSize: 13,
    fontWeight: '400',

    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
  sectionDetail: {
    color: colors.grey['250'],
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  wrapper: {
    alignItems: 'center',
    flex: 1,
    width: '100%',
    minHeight: 400,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
  pic: {
    width: '100%',
    objectFit: 'contain',
    height: '300@vs',
  },
  spacingX: {
    height: '10@vs',
  },
  btnSection: {
    height: '40@vs',
    width: '100%',
    marginTop: 14,
  },
  spacingTop: {
    height: '8@vs',
  },
});

export default Cart;
