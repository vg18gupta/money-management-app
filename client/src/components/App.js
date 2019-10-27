import React, { Component } from 'react'; 
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'


class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path='/' exact Component={Home} />
          <Route path='/login' Component={Login}/>
          <Route path='/register' Component={Register}/>
        </Switch>


      </div>
    </BrowserRouter>
  );
  }
}

export default App;
