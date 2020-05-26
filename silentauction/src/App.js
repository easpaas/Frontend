import React,{useState,useContext} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom'

import {UserContext} from './utils/context'

import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Login from './components/Login'
import Seller from './components/Seller'
import Bidder from './components/Bidder'

import PrivateRoute from './utils/PrivateRoute'


function App() {
  const [userData,setUserData]= useState({})

  return (
    <div className="App">
      <UserContext.Provider value={{userData}}>
         
      <Switch>

    {localStorage.getItem('role') === false
     ? <PrivateRoute path='/home' component={Seller}/>
    : <PrivateRoute path="/home" component={Bidder}/>
    }
    <Route path='/login' component={Login}/>
    <Route path='/welcome' component={Landing} />
    <Redirect to='/welcome'/>
    
      </Switch>
      </UserContext.Provider>
     

    </div>
  );
}

export default App;
