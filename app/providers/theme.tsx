import * as React from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Theme = {
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    color1: string;
    color2: string;
    color3: string;
    color4: string;
  };
  fonts: {
    bold: string;
    boldItalic: string;
    italic: string;
    regular: string;
    semiBold: string;
    semiboldItalic: string;
  };
};

const fonts = {
  bold: 'OpenSans-Bold',
  boldItalic: 'OpenSans-BoldItalic',
  italic: 'OpenSans-Italic',
  regular: 'OpenSans',
  semiBold: 'OpenSans-Semibold',
  semiboldItalic: 'OpenSans-SemiboldItalic',
};

const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#007F7F',
    background: 'rgb(1, 1, 1)',
    card: 'rgb(18, 18, 18)',
    text: 'rgb(229, 229, 231)',
    color1: '#5a6a36',
    color2: '#808080',
    color3: '#595959',
    color4: '#c97f31',
  },
  fonts,
};

const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: '#90908e',
    background: '#357d7e',
    card: '#272727',
    text: 'rgb(28, 28, 30)',
    color1: '#5a6a36',
    color2: '#808080',
    color3: '#595959',
    color4: '#c97f31',
  },
  fonts,
};

const themes = {
  light: DefaultTheme,
  dark: DarkTheme,
};

const preferredTheme = Appearance.getColorScheme() ?? 'dark';

type Themes = keyof typeof themes;

// eslint-disable-next-line no-spaced-func
const ThemeContext = React.createContext<{
  theme: Theme;
  toggleTheme: () => void;
}>({
  theme: themes[preferredTheme],
  toggleTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setTheme] = React.useState<Themes>(preferredTheme);

  const init = async () => {
    const themeStorage = (await AsyncStorage.getItem(
      '@theme',
    )) as Themes | null;

    if (themeStorage !== null) {
      setTheme(themeStorage);
    }
  };

  const toggleTheme = React.useCallback(async () => {
    const next = theme === 'light' ? 'dark' : 'light';

    setTheme(next);

    await AsyncStorage.setItem('@theme', next);
  }, [theme]);

  React.useEffect(() => {
    init();
  });

  const data = React.useMemo(() => themes[theme], [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme: data,
        toggleTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const theme = React.useContext(ThemeContext);

  return theme;
}
