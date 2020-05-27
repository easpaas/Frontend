import React, {useContext} from 'react'
import {BidderContext,UserContext} from '../utils/context'
import {BrowserRouter,useLocation,Route,Link} from 'react-router-dom'

import BidderWatchList from './BidderWatchList'
import AllBids from './AllBids'
import Bids from './Bids'
export default function Bidder() {
    const userData = useContext(UserContext)
    const bidderData = useContext(BidderContext)
    const {pathname} = useLocation()


    return (
        <div>

            <div>
                <header>

                </header>
                <BrowserRouter>
                <nav>
                        <Link to={`/${pathname}/watchlist`}>Watch List </Link>
                        <Link to={`/${pathname}/all-bids`}>All Bids</Link>

                </nav>

                    <Route path={`/:id/watchlist`} component={BidderWatchList}/>
                    <Route path={`/:id/all-bids`} component={AllBids} />
                    <Route path={`/bid/:id`} component={Bids} />
                
                </BrowserRouter>
            </div>

        </div>
    )
}
