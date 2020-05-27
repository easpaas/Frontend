import React,{useState,useContext, useEffect} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom'
import axios from 'axios'

import {UserContext,GlobalContext, SellerContext, BidderContext} from './utils/context'

import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Login from './components/Login'
import Seller from './components/Seller'
import Bidder from './components/Bidder'

import PrivateRoute from './utils/PrivateRoute'


function App() {
  const [userData,setUserData]= useState({username:'bidguy',password:'thiss', seller:false , bids:[],watchlist:[]})
  const [globalData,setglobalData]=useState({})
  const [sellerData,setSellerData] =useState({})
  const [bidderData,setBidderData] =useState({})



  return (
    <div className="App">
      <GlobalContext.Provider value={{globalData}}> 
          <UserContext.Provider value={{userData}}>
            <SellerContext.Provider value={{sellerData}}>
              <BidderContext.Provider value={{bidderData}}>
                  
                <Switch>

                  {localStorage.getItem('seller') === 'true'
                  ? <PrivateRoute path={`/home/${userData.username}`} component={Seller}/>
                  : <PrivateRoute path={`/home/${userData.username}`} component={Bidder}/>
                  }
                  <Route path='/login' component={Login}/>
                  <Route path='/welcome' component={Landing} />
                  <Redirect to='/welcome'/>
              
                </Switch>
              </BidderContext.Provider>
            </SellerContext.Provider>
          </UserContext.Provider>
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
