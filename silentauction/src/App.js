import React,{useState,useContext} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom'

import {UserContext} from './utils/context'

import './App.css';
import Landing from './components/Landing'
import Login from './components/Login'

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={{}}>
         
      <Switch>


    <Route path='/login' component={Login}/>
    <Route path='/' component={Landing} />
    
      </Switch>
      </UserContext.Provider>
     

    </div>
  );
}

export default App;
