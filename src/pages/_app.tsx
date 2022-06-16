import { createGlobalStyle } from 'styled-components';
import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeServer } from '../server/mirage';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from '../server/queryClient';

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

if (process.env.NODE_ENV == 'development') {
  makeServer();
}

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
