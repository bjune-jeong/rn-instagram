module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        assets: ['./assets/fonts'],
        alias: {
          // style: './style',
          images: './asset/images',
          // styleProps: './style/styleProps',
        },
      },
    ],
  ],
};
