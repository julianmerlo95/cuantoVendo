import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Vender from '../component/vender/Vender';
import Navbar from '../component/navbar/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/vender" component={Vender} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
