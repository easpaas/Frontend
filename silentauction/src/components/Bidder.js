import React, {useContext,useState,useEffect} from 'react'
import {BidderContext,UserContext,GlobalContext} from '../utils/context'
import {BrowserRouter,Route,Link,match,useHistory} from 'react-router-dom'
import styled from 'styled-components'

import BidderWatchList from './BidderWatchList'
import AllBids from './AllBids'
import Bids from './Bids'
import BidFull from './BidFull'

const Div = styled.div `
    nav{
        background:#696969;
        display:flex;
        justify-content:space-around;
        padding:2%;

        .navItem{
            color:white;
            text-decoration:none;
            text-shadow:0 3px black;
            font-size:1.22rem;
            transition:all .3s ease-in-out;
            &:hover{
                text-shadow:0 1px lightgray;

            }
        }
       



    }

`
export default function Bidder(props) {
    const userData = useContext(UserContext)
    const bidderData = useContext(BidderContext)
    const globalData = useContext(GlobalContext)

    const {push,go} = useHistory()




    return (
        <div>

            <Div>
                
                <BrowserRouter>

                <nav>
                <Link className='navItem' to={`/${userData.userData.username}/watchlist`} > WatchList</Link>
                <Link className='navItem' to={`/dashboard`} > Dashboard</Link>
                <Link className='navItem' to={props.match.path}> Home </Link>
                <Link className='navItem' onClick={()=>{
                    localStorage.removeItem('token')
                    push('/welcome')
                    }}>Log out
                </Link>


                    <Link className='navItem' onClick={()=>{
                    localStorage.setItem('seller','true')
                    go()
                }}> Switch To Seller </Link>
                

                </nav>
                <main>

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
                    </main>

                </BrowserRouter>
            </Div>

        </div>
    )
}
