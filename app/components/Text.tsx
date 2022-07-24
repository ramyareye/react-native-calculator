import React from 'react';
import {Text as TextComponent, StyleProp, TextStyle} from 'react-native';

import {useTheme} from 'providers/theme';

interface TextProps {
  title: string;
  style?: StyleProp<TextStyle> | undefined;
}

const Text = ({title, style}: TextProps) => {
  const {theme} = useTheme();

  return (
    <TextComponent style={[{color: theme.colors.text}, style]}>
      {title}
    </TextComponent>
  );
};

export default Text;
