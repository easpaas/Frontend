import React,{useState,useContext, useEffect} from 'react';
import {Route,Switch, Redirect} from 'react-router-dom'
import axios from 'axios'



import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Login from './components/Login'
import Seller from './components/Seller'
import Bidder from './components/Bidder'

import PrivateRoute from './utils/PrivateRoute'
import {UserContext,GlobalContext, SellerContext, BidderContext} from './utils/context'

import itemFunctions from './utils/itemRouteFunctions'


function App() {
  
  const [userData,setUserData]= useState({
    username:'bidguy',
    password:'thiss',
    //  seller:"false" , 
     createdBids:[{
       id:2,
      startingBid:200,title:'fishnet',description:'looks good',category:'electronics',bidders:[]}],
     watchlist:[]})
  const [globalData,setglobalData]=useState({})
  const [sellerData,setSellerData] =useState({})
  const [bidderData,setBidderData] =useState({bids:[{
    id:1,
    title:'ricks ticks',
    startingBid:300,
    closeDate:'12/4/2020',
    description:'smells great',
    category:'outside',
    bidders:[],
    currentBid:300
    


}],

})



  return (
    <div className="App">
      <GlobalContext.Provider value={{globalData,setglobalData,itemFunctions}}> 
          <UserContext.Provider value={{userData,setUserData}}>
            <SellerContext.Provider value={{sellerData,setSellerData}}>
              <BidderContext.Provider value={{bidderData,setBidderData}}>
                  
                <Switch>

                  {localStorage.getItem('seller') === 'true'
                  ? <PrivateRoute path={`/home/${userData.username}`} component={Seller}/>
                  : <PrivateRoute path={`/home/${userData.username}`} component={Bidder}/>
                  }
                  <Route path='/login' component={Login}/>
                  <Redirect to='/login'/>
              
                </Switch>
              </BidderContext.Provider>
            </SellerContext.Provider>
          </UserContext.Provider>
      </GlobalContext.Provider>

    </div>
  );
}

export default App;
