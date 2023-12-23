/* do not change this file, it is auto generated by storybook. */

import {
  configure,
  addDecorator,
  addParameters,
  addArgsEnhancer,
  clearDecorators,
} from "@storybook/react-native";

global.STORIES = [
  {
    titlePrefix: "",
    directory: "./.storybook/stories",
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      "^\\.[\\\\/](?:\\.storybook\\/stories(?:\\/(?!\\.)(?:(?:(?!(?:^|\\/)\\.).)*?)\\/|\\/|$)(?!\\.)(?=.)[^/]*?\\.stories\\.(?:ts|tsx|js|jsx)?)$",
  },
];


import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-notes/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
  if (__DEV__) {
    // stops the warning from showing on every HMR
    require("react-native").LogBox.ignoreLogs([
      "`clearDecorators` is deprecated and will be removed in Storybook 7.0",
    ]);
  }
  // workaround for global decorators getting infinitely applied on HMR, see https://github.com/storybookjs/react-native/issues/185
  clearDecorators();
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

try {
  argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));
} catch { }

const getStories = () => {
  return {
    "./.storybook/stories/Text/Text.stories.tsx": require("./stories/Text/Text.stories.tsx"),
    "./.storybook/stories/InputSearch/InputSearch.stories.tsx": require("./stories/InputSearch/InputSearch.stories.tsx"),
    "./.storybook/stories/Title/Title.stories.tsx": require("./stories/Title/Title.stories.tsx"),
    "./.storybook/stories/Wrapper/Wrapper.stories.tsx": require("./stories/Wrapper/Wrapper.stories.tsx"),
    "./.storybook/stories/Button/Button.stories.tsx": require("./stories/Button/Button.stories.tsx"),
    "./.storybook/stories/ButtonCreateList/ButtonCreateList.stories.tsx": require("./stories/ButtonCreateList/ButtonCreateList.stories.tsx"),
    "./.storybook/stories/ButtonIcon/ButtonIcon.stories.tsx": require("./stories/ButtonIcon/ButtonIcon.stories.tsx"),
    "./.storybook/stories/Card/Card.stories.tsx": require("./stories/Card/Card.stories.tsx"),
    "./.storybook/stories/Checkbox/Checkbox.stories.tsx": require("./stories/Checkbox/Checkbox.stories.tsx"),
    "./.storybook/stories/Radio/Radio.stories.tsx": require("./stories/Radio/Radio.stories.tsx"),
    "./.storybook/stories/Toast/Toast.stories.tsx": require("./stories/Toast/Toast.stories.tsx"),
    "./.storybook/stories/SelectDropdown/SelectDropdown.stories.tsx": require("./stories/SelectDropdown/SelectDropdown.stories.tsx"),
    "./.storybook/stories/CardUser/CardUser.stories.tsx": require("./stories/CardUser/CardUser.stories.tsx"),
  };
};

configure(getStories, module, false);