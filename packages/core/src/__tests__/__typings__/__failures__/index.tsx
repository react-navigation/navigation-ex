// @ts-nocheck
import NavigationContainer from '../../../NavigationContainer';
import Screen from '../../../Screen';
import * as React from 'react';
import useNavigationBuilder from '../../../useNavigationBuilder';
import MockRouter from '../../__fixtures__/MockRouter';

const TestNavigator = (props: any) => {
  const { state, descriptors } = useNavigationBuilder(MockRouter, props);
  return descriptors[state.routes[state.index].key].render();
};

export const element = (
  <NavigationContainer initialState={null}>
    <TestNavigator>
      <Screen name="foo" component={() => null} />
    </TestNavigator>
  </NavigationContainer>
);
