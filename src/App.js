import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig';

import Header from './components/Header/index';
import Routes from './routes';
import history from './services/history';
import store from './store';
import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={ store }>
      <Router history={ history }>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={ 3000 } />
      </Router>
    </Provider>
  );
}

export default App;
