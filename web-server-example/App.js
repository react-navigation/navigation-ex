import * as React from 'react';
import { View, Button } from 'react-native';
import { createWebNavigator } from '@react-navigation/web-server';
// import { useNavigation } from '@react-navigation/native';

const AppRoutes = {
  Home,
  Profile,
};

export default createWebNavigator(AppRoutes);

// function MyButton() {
//   // const navigation = useNavigation();

//   return (
//     <Button
//       title="Back"
//       onPress={() => {
//         // navigation.goBack();
//       }}
//     />
//   );
// }

// export default function App() {
//   return (
//     <View>
//       <MyButton title="Hello" />
//       <MyButton title="World" />
//     </View>
//   );
// }
