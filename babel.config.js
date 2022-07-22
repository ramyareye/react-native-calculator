module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          pages: './app/pages',
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
