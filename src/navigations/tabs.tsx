import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {View, Text, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import {colors} from '../constants/colors';
import HomeIcon from '../icons/home';
import CartIcon from '../icons/cart';
import HeartIcon from '../icons/heart';
import Profile from '../icons/profile';
import UseAppContext from '../hooks/useAppContext';

export default function Tabs({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps): React.JSX.Element {
  const {cart} = UseAppContext();

  const renderIcon = (name: string, isFocused: boolean) => {
    switch (name) {
      case 'Home':
        return <HomeIcon isFocused={isFocused} />;
      case 'Cart':
        return (
          <View style={{position: 'relative'}}>
            <Text
              style={{
                position: 'absolute',
                right: 4,
                color: colors.error['50'],
                fontWeight: 'bold',
                fontFamily: 'IBMPlexSans',
              }}>
              {cart?.length}
            </Text>
            <CartIcon isFocused={isFocused} />
          </View>
        );
      case 'Favorites':
        return <HeartIcon isFocused={isFocused} />;
      case 'Profile':
        return <Profile isFocused={isFocused} />;
      default:
        return null;
    }
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        height: scale(80),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.brand[50],
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label = options.title ?? route.name;
        const isFocused = state.index === index;
        const color = isFocused ? colors.blue[50] : colors.grey[100];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, padding: 5}}>
            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  backgroundColor: isFocused
                    ? colors.blue['50']
                    : colors.brand['50'],
                  borderRadius: 30,
                  paddingHorizontal: 6,
                  paddingVertical: 4,
                }}>
                {renderIcon(route.name, isFocused)}
              </View>
              <Text
                style={{
                  color,
                  fontSize: 15,
                  fontWeight: 'bold',
                  marginTop: 3,
                  fontFamily: 'IBMPlexSans',
                }}>
                {label}
              </Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
