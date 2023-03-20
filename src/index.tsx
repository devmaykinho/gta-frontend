import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './presentation/styles/theme';
import { Main } from './presentation/main';
import { GlobalStyled } from './presentation/styles/global-styled';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Main />
    </ThemeProvider>
  </React.StrictMode>
);
