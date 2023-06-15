module.exports = {
  stories: ['./stories/**/*.stories.?(ts|tsx|js|jsx)'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials", 
  ],
  core: {
    builder: "webpack5",
  },
  framework: "@storybook/react",
};
