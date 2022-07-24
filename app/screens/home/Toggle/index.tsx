import React from 'react';
import {Switch} from 'react-native';

import {useTheme} from 'providers/theme';

const Toggle = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <Switch
      trackColor={{false: '#767577', true: '#81b0ff'}}
      thumbColor={!theme.dark ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleTheme}
      value={!theme.dark}
    />
  );
};
export default Toggle;
