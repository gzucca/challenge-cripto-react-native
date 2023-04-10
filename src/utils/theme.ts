import {DefaultTheme} from 'styled-components';

const darkTheme: DefaultTheme = {
  primary: 'black',
  text: 'white',
  grey: 'rgba(192, 192, 192, 0.5)',
  green: 'green',
  red: 'red',
  blue: '#385775',
  yellow: '#fbd24d',
  white: 'white',
  lightGrey: '#385775',
};

const lightTheme: DefaultTheme = {
  primary: 'white',
  text: 'black',
  grey: 'lightgrey',
  green: 'green',
  red: 'red',
  blue: '#385775',
  yellow: '#fbd24d',
  white: 'white',
  lightGrey: '#385775',
};

export {darkTheme, lightTheme};
