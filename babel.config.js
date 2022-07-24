module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          data: './app/data',
          store: './app/store',
          utils: './app/utils',
          screens: './app/screens',
          components: './app/components',
          providers: './app/providers',
        },
        root: ['./app'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
