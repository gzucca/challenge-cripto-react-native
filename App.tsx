/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ThemeProvider} from 'styled-components/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {ContentView} from './styles';
import {lightTheme, darkTheme} from './src/utils/theme';
import Main from './src/pages/Main/index';
import {useColorScheme} from 'react-native';

function App(): JSX.Element {
  const isDarkTheme = useColorScheme() === 'dark'

  return (
    <ThemeProvider theme={isDarkTheme? darkTheme : lightTheme }>
      <SafeAreaView>
        <StatusBar />
        <ContentView>
          <Main></Main>
        </ContentView>
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
