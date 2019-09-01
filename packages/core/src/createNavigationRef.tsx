import * as CommonActions from './CommonActions';
import {
  NavigationContainerRef,
  PartialState,
  NavigationState,
  NavigationAction,
} from './types';

type NavigationRefType = NavigationContainerRef & {
  current: NavigationContainerRef | null;
};

export default function createNavigationRef(): NavigationRefType {
  let current: NavigationContainerRef | null = null;

  return {
    get current() {
      return current;
    },
    set current(value) {
      current = value;
    },
    canGoBack() {
      return current ? current.canGoBack() : false;
    },
    resetRoot(state: PartialState<NavigationState> | NavigationState) {
      current && current.resetRoot(state);
    },
    dispatch(action: NavigationAction) {
      current && current.dispatch(action);
    },
    ...(Object.keys(CommonActions) as Array<keyof typeof CommonActions>).reduce<
      any
    >((acc, name) => {
      // @ts-ignore
      acc[name] = (...args: any[]) => current && current[name](...args);
      return acc;
    }, {}),
  };
}
