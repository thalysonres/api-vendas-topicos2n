import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Header } from './pages/Header/index';
import { Routes } from './routes/index';
import { GlobalStyle } from './styles/global';

// criando um componente funcional - FC
const App: React.FC = () => {

  return (
   <>
    <BrowserRouter>
      <Header/>
      <Routes/>
    </BrowserRouter>
    <GlobalStyle/>    
    </>
    
  );
}

export default App;
