import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserTable from './components/UserTable';
import Toolbar from './components/Toolbar';
import { Container } from '@mui/material';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Container maxWidth="lg" className='container' >
        <Toolbar />
        <UserTable />
      </Container>
    </Provider>
  );
};

export default App;

