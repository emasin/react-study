import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, ButtonToolbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     <ButtonToolbar>
       <Button variant="primary">Primary</Button>
         <Button variant="secondary">Secondary</Button>
     </ButtonToolbar>
    </div>
  );
}

export default App;
