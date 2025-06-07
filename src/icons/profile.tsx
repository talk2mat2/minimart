import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const Profile = ({isFocused}: {isFocused?: boolean}) => {
  const strokeColor = !isFocused ? 'black' : 'white';

  return (
    <Svg width="57" height="32" viewBox="0 0 57 32" fill="none">
      <G clipPath="url(#clip0)">
        <Path
          d="M28.125 26C33.6478 26 38.125 21.5228 38.125 16C38.125 10.4772 33.6478 6 28.125 6C22.6022 6 18.125 10.4772 18.125 16C18.125 21.5228 22.6022 26 28.125 26Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M23.625 21C25.957 18.558 30.268 18.443 32.625 21M30.62 13.5C30.62 14.88 29.5 16 28.117 16C27.7884 16.0005 27.4628 15.9363 27.1591 15.8109C26.8553 15.6854 26.5792 15.5014 26.3466 15.2692C26.1141 15.037 25.9296 14.7612 25.8037 14.4576C25.6778 14.1541 25.613 13.8286 25.613 13.5C25.613 12.12 26.733 11 28.117 11C28.4456 10.9996 28.771 11.064 29.0746 11.1894C29.3783 11.3149 29.6542 11.499 29.8867 11.7312C30.1192 11.9634 30.3036 12.2391 30.4294 12.5426C30.5552 12.8461 30.62 13.1714 30.62 13.5Z"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect x="0.125" width="56" height="32" rx="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Profile;
