module.exports = {
    presets: [
      "module:metro-react-native-babel-preset",
      ["@babel/preset-react", { targets: { node: "current" } }],
      ["@babel/preset-env", { targets: { node: "current" } }]
      ["@babel/preset-react", {
        "runtime": "automatic"
      }]
    ],
    plugins: ["@babel/plugin-syntax-jsx"]
  };
  