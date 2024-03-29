import './App.css';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserTable from './components/UserTable';
import Toolbar from './components/Toolbar';
import { Button, Container, createTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';



const App: React.FC = () => {
  const isDarkModeInSystem = useMediaQuery('(prefers-color-scheme: dark)');
  const [ mode, setMode ] =  useState(isDarkModeInSystem ? 'dark' : 'light');
  const darkTheme = createTheme({ 
    palette: { 
        mode: mode == 'dark'  ? 'dark' : 'light'
    }, 
}); 

useEffect(() => {
  if(isDarkModeInSystem)
    setMode('dark');
  else
    setMode('light');
}, [ isDarkModeInSystem ] );

  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container maxWidth="lg" className='container' >
          <Toolbar />
          <UserTable />
        </Container>
        <div className='themeModeButton' >
        <Button
          variant="contained"
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
        >
          {darkTheme.palette.mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Button>
        </div>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

