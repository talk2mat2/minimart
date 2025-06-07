import {Image, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '../constants/colors';
import {scale, ScaledSheet} from 'react-native-size-matters';
import {Product} from '../interface/IProducts';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UseAppContext from '../hooks/useAppContext';

const CartItem = ({item}: {item: Product}) => {
  const {increaseQty, reduceQty, removeFromCart, removeProductFromCart} =
    UseAppContext();
  return (
    // <View style={styles.container}>
    //   <Image style={styles.pic} source={item?.image} />
    //   <View style={{height: '100%'}}>
    //     <Text style={styles.sectionTitle}>{item?.name}</Text>
    //     <Text style={styles.price}>${item?.price}</Text>
    //     <Text style={styles.stocks}>"In stock"</Text>
    //     <View
    //       style={{
    //         flexDirection: 'row',
    //         backgroundColor:"orange",
    //         justifyContent: 'space-between',
    //       }}>
    //       <View style={{flexDirection: 'row'}}>
    //         <TouchableOpacity
    //           style={{
    //             padding: 4,
    //             backgroundColor: colors.brand['50'],
    //             borderRadius: 30,
    //             marginRight: 10,
    //           }}>
    //           <Icon size={20} name="minus" />
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={{
    //             padding: 4,
    //             backgroundColor: colors.brand['50'],
    //             borderRadius: 30,
    //           }}>
    //           <Text style={styles.count}>2</Text>
    //         </TouchableOpacity>
    //         <TouchableOpacity
    //           style={{
    //             padding: 4,
    //             backgroundColor: colors.brand['50'],
    //             borderRadius: 30,
    //             marginLeft: 10,
    //           }}>
    //           <Icon size={20} name="plus-thick" />
    //         </TouchableOpacity>
    //       </View>
    //       <TouchableOpacity
    //         style={{
    //           padding: 4,
    //           backgroundColor: colors.brand['50'],
    //           borderRadius: 30,
    //         }}>
    //         <Icon size={20} name="trash-can-outline" />
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    // </View>
    <View style={styles.container}>
      <Image style={styles.pic} source={item?.image} />

      <TouchableOpacity style={{flex: 1, height: '100%'}} activeOpacity={0.9}>
        <Text style={styles.sectionTitle}>{item?.name}</Text>
        <Text style={styles.price}>${item?.price}</Text>
        <Text style={styles.stocks}>"In stock"</Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => reduceQty(item.id)}
              style={{
                padding: 4,
                backgroundColor: colors.brand['50'],
                borderRadius: 30,
                marginRight: 10,
              }}>
              <Icon size={20} name="minus" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                padding: 4,
                backgroundColor: colors.brand['50'],
                borderRadius: 30,
              }}>
              <Text style={styles.count}>{item?.qty}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => increaseQty(item.id)}
              style={{
                padding: 4,
                backgroundColor: colors.brand['50'],
                borderRadius: 30,
                marginLeft: 10,
              }}>
              <Icon size={20} name="plus-thick" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => removeProductFromCart(item.id)}
            style={{
              padding: 4,
              backgroundColor: colors.brand['50'],
              borderRadius: 30,
            }}>
            <Icon size={20} name="trash-can-outline" />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = ScaledSheet.create({
  container: {
    height: 132,
    paddingHorizontal: 10,
    paddingRight: 3,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.neutral['350'],

    borderRadius: 8,
    marginVertical: 8,
  },
  pic: {
    objectFit: 'contain',
    maxWidth: 132,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['50'],
  },
  stocks: {
    fontSize: 17,
    fontWeight: '400',
    fontFamily: 'IBMPlexSans',
    color: colors.success['200'],
  },
  count: {
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
  price: {
    fontSize: 17,
    fontWeight: '700',
    fontFamily: 'IBMPlexSans',
    color: colors.grey['200'],
  },
});
export default CartItem;
