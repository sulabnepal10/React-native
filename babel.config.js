module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    //This react-native-reanimated/plugin should be place at last 
    plugins: ["nativewind/babel",'react-native-reanimated/plugin'],
  };
};
