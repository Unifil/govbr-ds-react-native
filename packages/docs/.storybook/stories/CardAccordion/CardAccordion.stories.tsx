import { CardAccordion } from "@unifil/react-native";
import React from 'react';
import { Text } from 'react-native';

export default {
  title: 'CardAccordion',
  component: CardAccordion,
};

const exampleContent = <Text>MEC MATEMÁTICA</Text>;
const exampleIcon = <Text>Ícone</Text>;

export const Default = () => (
  <CardAccordion
    content={exampleContent}
    icon={exampleIcon}
  >
    <Text>Isso é um teste dev</Text>
  </CardAccordion>
);

export const Expanded = () => (
  <CardAccordion
    content={exampleContent}
    icon={exampleIcon}
    isExpanded={true}
  >
    <Text>Tst</Text>
  </CardAccordion>
);


