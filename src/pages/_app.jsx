import { createGlobalStyle, ThemeProvider } from 'styled-components';
import '../styles/globals.css';

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

const theme = {
  colors: {
    primary: '#000000',
  },
};

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
