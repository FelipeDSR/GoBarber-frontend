import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './hooks/Auth';

import GlobalStyle from './styles/global';

import ToastContainer from './components/ToastContainer';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
    <ToastContainer />
    <GlobalStyle />
  </>
);

export default App;
