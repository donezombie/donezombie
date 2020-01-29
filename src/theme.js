import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  marginBetweenText: 12,
  palette: {
    primary: {
      main: '#2196F3',
      hover: '#47aeff',
    },
    secondary: {
      main: '#14171a'
    }
  }
});


export default theme;