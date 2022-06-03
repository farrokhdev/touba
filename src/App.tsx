import React from 'react';
import Pages from './views/pages/pages';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <BrowserRouter>
      <Pages/>
    </BrowserRouter>
  );
}

export default App;
