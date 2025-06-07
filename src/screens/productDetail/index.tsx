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
import UseAppContext from '../../hooks/useAppContext';

interface props {
  navigation: NavigationProp<ParamListBase>;
}

const ProductDetail: React.FC<props> = ({navigation}) => {
  const route = useRoute();
  const {id} = route.params as {id: string};
  const {isLoading, data} = UseGetProduct(id);
  const {addProductToCart} = UseAppContext();

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
      <SubHeader title="Go Back" showNav navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {isLoading ? (
            <ActivityIndicator
              color={colors.blue['50']}
              size={30}
              style={{marginTop: 30}}
            />
          ) : (
            <>
              <View style={{flex: 1, width: '100%', position: 'relative'}}>
                <View style={{position: 'absolute', zIndex: 1, right: 2}}>
                  <HeartIcon />
                </View>
                <Image style={styles.pic} source={data?.image || ''} />
              </View>
              <View style={{width: '100%'}}>
                <Text style={styles.sectionTitle}>{data?.name || ''}</Text>
                <Text style={styles.price}>${data?.price || ''}</Text>
                <View style={{marginTop: 10}} />
                <Text style={styles.sectionDetail}>About this item</Text>
                <View style={{marginTop: 2}}>
                  {data?.description?.map((desc, index) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        marginBottom: 3,
                      }}>
                      <Icon name="circle-medium" />
                      <Text key={index} style={styles.sectionDetail}>
                        {desc}
                      </Text>
                    </View>
                  ))}
                </View>
                <View style={{marginTop: 20}}>
                  <Btn onPress={()=>addProductToCart(id)} title="Add to cart" />
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
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
    fontSize: 33,
    fontWeight: '700',
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
    paddingBottom: 180,
    flex: 1,
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
  spacingTop: {
    height: '8@vs',
  },
});

export default ProductDetail;
