import React,{useState,useContext, useEffect} from 'react';
import {Route,Switch, Redirect,Link} from 'react-router-dom'
import axios from 'axios'



import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing'
import Register from './components/Registration'
import Seller from './components/Seller'
import Bidder from './components/Bidder'
import LogMeIn from './components/Login'

import PrivateRoute from './utils/PrivateRoute'
import {UserContext,GlobalContext, SellerContext, BidderContext} from './utils/context'

import itemFunctions from './utils/itemRouteFunctions'




const initialFormValues= {
  username: '',
  email:'',
  password: '',
  /*text inputs*/
  seller:'false',
  /*seller status could be radio or dropdown*/



}



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registering, setRegistering] = useState({});
  const [loggingIn, setLoggingIn] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(false);
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

              <nav>
                    <Link to='/login'>Login </Link>
                    <Link to='/register'>Register</Link>
                    <a href='https://xenodochial-curie-b3eb5b.netlify.app'>home</a>
                  </nav>

                  
                <Switch>
                  

                  {localStorage.getItem('seller') === 'true'
                  ? <PrivateRoute path={`/home/${userData.username}`} component={Seller}/>
                  : <PrivateRoute path={`/home/${userData.username}`} component={Bidder}/>
                  }
                  <Route path='/login' component={LogMeIn}/>
                  <Route path='/register' component={Register}/>
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
