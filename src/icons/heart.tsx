import React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const HeartIcon = ({isFocused}: {isFocused?: boolean}) => {
  const stroke = isFocused ? 'white' : 'black';

  return (
    <Svg width="57" height="32" viewBox="0 0 57 32" fill="none">
      <G clipPath="url(#clip0_1567_305)">
        <Path
          d="M35.838 7.99398C33.156 6.34898 30.815 7.01198 29.409 8.06798C28.833 8.50098 28.545 8.71798 28.375 8.71798C28.205 8.71798 27.917 8.50098 27.341 8.06798C25.935 7.01198 23.594 6.34898 20.912 7.99398C17.393 10.153 16.597 17.274 24.715 23.284C26.261 24.427 27.034 25 28.375 25C29.716 25 30.489 24.428 32.035 23.283C40.153 17.275 39.357 10.153 35.838 7.99398Z"
          stroke={stroke}
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1567_305">
          <Rect x={0.375} width={56} height={32} rx={16} fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HeartIcon;
