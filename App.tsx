import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {StatusBar} from 'react-native';
import {lightTheme, darkTheme} from './src/utils/theme';
import Main from './src/pages/Main/index';
import Search from './src/pages/Search/index';
import {useColorScheme} from 'react-native';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import { GestureHandlerRootView } from 'react-native-gesture-handler';




const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Provider store={store}>
        <StatusBar />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              statusBarColor: 'transparent',
              statusBarTranslucent: true,
            }}>
            <Stack.Screen
              name="Home"
              component={Main}
              options={{animation: 'slide_from_left'}}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{animation: 'slide_from_right'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
    </GestureHandlerRootView>
  );
}

export default App;
