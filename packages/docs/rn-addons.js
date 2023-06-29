import { addDecorator } from '@storybook/react-native';
import { withReanimatedStub } from 'react-native-reanimated/mock';

addDecorator(withReanimatedStub);
