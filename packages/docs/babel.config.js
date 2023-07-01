module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["babel-plugin-react-docgen-typescript", { exclude: "node_modules" }],
      'react-native-reanimated/plugin',
      '@babel/plugin-proposal-export-namespace-from'
    ],
  };
};
