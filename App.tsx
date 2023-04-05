import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {ContentView} from './styles';
import {lightTheme, darkTheme} from './theme';
import Main from './src/pages/Main/index';
import Search from './src/pages/Search/index';
import {useColorScheme} from 'react-native';
import {store} from './src/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Search: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  const isDarkTheme = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <Provider store={store}>
            <StatusBar />
            <NavigationContainer>
              <RootStack.Navigator initialRouteName="Home">
                <RootStack.Screen name="Home" component={Main} />
                <RootStack.Screen name="Search" component={Search} />
              </RootStack.Navigator>
            </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
