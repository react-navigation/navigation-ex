import * as React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Text, TextProps } from 'react-native';

type TouchableProps = {
  onPress?: any;
};

type Props<T extends TouchableProps> = {
  to: string;
  params?: object;
  component: React.ComponentType<T>;
};

export default function Link<T extends TouchableProps = TextProps>({
  to,
  params,
  component = Text,
  ...rest
}: Props<T>) {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate(to, params);
  };

  return React.createElement(component, { onPress, ...rest });
}
