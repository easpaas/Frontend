import React, {useContext} from 'react'
import {BidderContext,UserContext,GlobalContext} from '../utils/context'
import {BrowserRouter,Route,Link,match} from 'react-router-dom'

import BidderWatchList from './BidderWatchList'
import AllBids from './AllBids'
import Bids from './Bids'
export default function Bidder(props) {
    const userData = useContext(UserContext)
    const bidderData = useContext(BidderContext)
    const globalData = useContext(GlobalContext)

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
                            return <Bids  data={{props,userData,globalData,bidderData}} />}} />
                
                </BrowserRouter>
            </div>

        </div>
    )
}
