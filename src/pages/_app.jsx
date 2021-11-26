import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#D53F8C',
    },
  },
});

const GlobalStyle = createGlobalStyle`
  //Global Colors
  body {
    background: #181B23;
  }

  //Responsive configurations

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
