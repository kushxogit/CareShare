const { getDefaultConfig } = require("metro-config");

module.exports = async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();

  return {
    transformer: {
      assetPlugins: ["react-native-svg-transformer"],
    },
    resolver: {
      assetExts: [...assetExts, "svg"],
      sourceExts: [...sourceExts, "svg"],
    },
  };
};
