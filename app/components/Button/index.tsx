import React from 'react';
import {Pressable, StyleProp, TextStyle, ViewStyle} from 'react-native';

import Text from '../Text';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style, textStyle}) => {
  return (
    <Pressable onPress={onPress} style={style}>
      <Text title={title} style={textStyle} />
    </Pressable>
  );
};

export default Button;
