import React, {useContext,useState,useEffect} from 'react'
import {BidderContext,UserContext,GlobalContext} from '../utils/context'
import {BrowserRouter,Route,Link,match,useHistory} from 'react-router-dom'

import BidderWatchList from './BidderWatchList'
import AllBids from './AllBids'
import Bids from './Bids'
import BidFull from './BidFull'
export default function Bidder(props) {
    const userData = useContext(UserContext)
    const bidderData = useContext(BidderContext)
    const globalData = useContext(GlobalContext)

    const {push,go} = useHistory()




    return (
        <div>

            <div>
                <header>

                </header>
                <BrowserRouter>

                <nav>
                <Link to={`/${userData.userData.username}/watchlist`} > WatchList</Link>
                <Link to={`/dashboard`} > Dashboard</Link>
                <Link to={props.match.path}> Home </Link>
                <a onClick={()=>{
                    localStorage.removeItem('token')
                    push('/welcome')
                    }}> Logoout</a>


                    <button onClick={()=>{
                    localStorage.setItem('seller','true')
                    go()
                }}> Switch To Seller </button>
                

                </nav>

                    <Route path={`/:id/watchlist`} render ={
                        (props)=>{
                            return <BidderWatchList  data={{props,userData,globalData,bidderData}} />}}/>
                            
                    <Route path={`/dashboard`} render ={
                        (props)=>{
                            return <AllBids
                            data={{props,userData,globalData,bidderData}}
                              />
                             }}/>

                    <Route path={`/bid/:id`} render ={
                        (props)=>{
                            return <BidFull  data={{props,userData,globalData,bidderData}} />}} />
                
                </BrowserRouter>
            </div>

        </div>
    )
}
