const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);
const { transformer, resolver } = defaultConfig

defaultConfig.resolver.resolverMainFields = [
  "sbmodern",
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.transformer = {
  ...transformer,
  babelTransformerPath: require.resolve('react-native-svg-transformer')
}

defaultConfig.resolver = {
  ...resolver,
  assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
  sourceExts: [...resolver.sourceExts, 'svg']
}

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});


 

module.exports = defaultConfig;
