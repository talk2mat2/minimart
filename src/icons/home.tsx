import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const HomeIcon = ({isFocused}: {isFocused?: boolean}) => {
  return (
    <Svg width="57" height="32" viewBox="0 0 57 32" fill="none">
      <Path
        d="M23.963 8.762L22.963 9.543C21.447 10.727 20.688 11.319 20.282 12.153C19.875 12.988 19.875 13.952 19.875 15.88V17.972C19.875 21.756 19.875 23.648 21.047 24.824C22.219 26 24.104 26 27.875 26H29.875C33.646 26 35.532 26 36.703 24.824C37.874 23.648 37.875 21.756 37.875 17.971V15.881C37.875 13.952 37.875 12.988 37.468 12.153C37.061 11.319 36.303 10.727 34.787 9.543L33.787 8.763C31.427 6.92 30.247 6 28.875 6C27.503 6 26.323 6.92 23.963 8.762Z"
        stroke={!isFocused ? 'black' : 'white'}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    flex: 1,
  },
});

export default HomeIcon;
