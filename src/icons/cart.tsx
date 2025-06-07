import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const CartIcon = ({isFocused}: {isFocused?: boolean}) => {
  const stroke = isFocused ? 'white' : 'black';

  return (
    <Svg width="57" height="32" viewBox="0 0 57 32" fill="none">
      <G clipPath="url(#clip0_1567_294)">
        <Path
          d="M24.625 20H31.888C36.376 20 37.058 17.18 37.886 13.07C38.125 11.883 38.244 11.29 37.957 10.895C37.67 10.5 37.12 10.5 36.019 10.5H22.625"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M24.625 20L22.004 7.515C21.8958 7.08232 21.6462 6.69821 21.2947 6.4237C20.9432 6.1492 20.51 6.00007 20.064 6H19.125M25.505 20H25.094C23.73 20 22.625 21.151 22.625 22.571C22.6238 22.6262 22.6335 22.681 22.6535 22.7324C22.6735 22.7838 22.7035 22.8308 22.7416 22.8706C22.7798 22.9105 22.8254 22.9424 22.8759 22.9646C22.9265 22.9868 22.9808 22.9988 23.036 23H34.125"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M27.125 26C27.9534 26 28.625 25.3284 28.625 24.5C28.625 23.6716 27.9534 23 27.125 23C26.2966 23 25.625 23.6716 25.625 24.5C25.625 25.3284 26.2966 26 27.125 26Z"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M34.125 26C34.9534 26 35.625 25.3284 35.625 24.5C35.625 23.6716 34.9534 23 34.125 23C33.2966 23 32.625 23.6716 32.625 24.5C32.625 25.3284 33.2966 26 34.125 26Z"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1567_294">
          <Rect x={0.625} width={56} height={32} rx={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CartIcon;
