import * as React from 'react';
import TabBarHeightContext from './TabBarHeightContext';

export default function useTabBarHeight() {
  const height = React.useContext(TabBarHeightContext);

  if (height === undefined) {
    throw new Error(
      "Couldn't find the tab bar height. Are you inside a screen in Bottom Tabs?"
    );
  }

  return height;
}
