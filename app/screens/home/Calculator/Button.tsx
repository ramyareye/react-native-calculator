import React from 'react';
import {StyleSheet, StyleProp, ViewStyle, TextStyle} from 'react-native';

import {Button} from 'components';

import {useTheme} from 'providers/theme';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle> | undefined;
  textStyle?: StyleProp<TextStyle> | undefined;
}

const CalculatorButton: React.FC<ButtonProps> = ({
  title,
  style,
  onPress,
  textStyle,
}) => {
  const {theme} = useTheme();

  return (
    <Button
      title={title}
      onPress={onPress}
      style={[styles.btn, style]}
      textStyle={[
        styles.btnText,
        {backgroundColor: theme.colors.color2},
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
