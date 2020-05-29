import React,{useContext,useState} from 'react'
import {UserContext,GlobalContext,SellerContext} from '../utils/context'
import {BrowserRouter,Route,Link,Redirect,useHistory} from 'react-router-dom'
import styled from 'styled-components'

import UserSidePanel from './UserSidePanel'
import SellList from './SellList'
import Nav from './Nav'
import CreateMortal from './CreateMortal'
import SellItemFull from './SellItemFull'


const Div = styled.div`
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


export default function Seller(props) {
    const userData = useContext(UserContext)
    const globalData= useContext(GlobalContext)
    const sellerData= useContext(SellerContext)


    const [showSide,setShowSide] = useState(false)
    const [showMortal,setShowMortal] = useState(false)
    const { push, location, go } = useHistory()


    return (
        <div>
            <Div>
            

            
            

            <BrowserRouter>
            <nav>
                <Link className='navItem' to='/seller-list'>Seller List</Link>
                <Link className='navItem' to={`/home/${userData.userData.username}`}>Home</Link>
                <Link className='navItem' onClick={()=>{
                    localStorage.setItem('seller','false')
                    go()
                }}> Switch To Bidder
                 </Link>
    
                    
                    {!showSide ?
                        <Link className='navItem' onClick={() => setShowSide(true)}>
                            Show Nav
                        </Link>
                        :
                        null
                    }    

                        <div>

                            {showSide ?

                                < UserSidePanel
                                    showMortal={showMortal}
                                    setShowMortal={setShowMortal}
                                    data={{ userData, sellerData, globalData }}
                                    setShowSide={setShowSide} />

                                :
                                null
                            }
                        </div>
                
            </nav>
            

            <main> 
                <Route path='/seller-list'>
                    <SellList data={{props,userData,globalData,sellerData}} />
                </Route>

                <Route path='/seller-item/:id'>
                    <SellItemFull data={{props,userData,globalData,sellerData}} />

                </Route>


                 </main>
            
            </BrowserRouter>

            </Div>


            
        </div>
    )
}
