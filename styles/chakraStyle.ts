import { extendTheme } from '@chakra-ui/react';
import font from './font';
import breakpoint from './breakpoint';

const styles = {
  global: {
    body: {
      fontFamily: 'Poppins',
    },
    '*': {
      margin: 0,
      padding: 0,
    },
  },
};

const theme = extendTheme({
  styles,
  breakpoint,
  font,
});

export default theme;
