import React from 'react';
import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';

import {Button} from 'components';

import {useTheme} from 'providers/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  color?: 'gray' | 'gray_dark' | 'orange';
  style?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
}

const CalculatorButton: React.FC<ButtonProps> = ({
  title,
  style,
  onPress,
  textStyle,
  color = 'gray',
}) => {
  const {theme} = useTheme();

  return (
    <Button
      title={title}
      onPress={onPress}
      style={[styles.btn, style]}
      textStyle={[
        styles.btnText,
        color === 'gray' && {backgroundColor: theme.colors.color2},
        color === 'orange' && {backgroundColor: theme.colors.color4},
        color === 'gray_dark' && {backgroundColor: theme.colors.color3},
        textStyle,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: '24%',
    flexBasis: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    width: 45,
    height: 45,
    fontSize: 20,
    lineHeight: 45,
    borderRadius: 22,
    overflow: 'hidden',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CalculatorButton;
