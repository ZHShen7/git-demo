import React from 'react';
import { useRoutes } from 'react-router-dom';
// import Login from './components/login/login';
import routes from './routes';
import './App.css';

const App = () => {
  const element = useRoutes(routes);
  return (
    <div>
      {element} 
    </div>
  );
}

export default App;

