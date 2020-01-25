/**
 * Navigators
 */
export { default as createBottomTabNavigator } from './navigators/createBottomTabNavigator';

/**
 * Views
 */
export { default as BottomTabView } from './views/BottomTabView';
export { default as BottomTabBar } from './views/BottomTabBar';

/**
 * Utilities
 */
export { default as HeaderHeightContext } from './utils/TabBarHeightContext';

export { default as useTabBarHeight } from './utils/useTabBarHeight';

/**
 * Types
 */
export {
  BottomTabNavigationOptions,
  BottomTabNavigationProp,
  BottomTabBarProps,
  BottomTabBarOptions,
} from './types';
