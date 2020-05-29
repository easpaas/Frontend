import React,{useContext,useState} from 'react'
import {UserContext,GlobalContext,SellerContext} from '../utils/context'
import {BrowserRouter,Route,Link} from 'react-router-dom'

import UserSidePanel from './UserSidePanel'
import SellList from './SellList'
import Nav from './Nav'
import CreateMortal from './CreateMortal'
import SellItemFull from './SellItemFull'


export default function Seller(props) {
    const userData = useContext(UserContext)
    const globalData= useContext(GlobalContext)
    const sellerData= useContext(SellerContext)


    const [showSide,setShowSide] = useState(false)
    const [showMortal,setShowMortal] = useState(false)

    return (
        <div>
            <div>
            {!showSide ?
            <button onClick={()=>setShowSide(true)}>
                Show Nav
            </button>   
            :
            null 
        }    

            {showSide ? 
            
            < UserSidePanel 
            showMortal={showMortal}
             setShowMortal={setShowMortal} 
             data={{userData,sellerData,globalData}}
             setShowSide={setShowSide} />

            :
            null
            }
            
            </div>

            <BrowserRouter>
            <nav>
                <Link to='/seller-list'>Seller List</Link>
            </nav>
                <Route path='/seller-list'>
                    <SellList data={{props,userData,globalData,sellerData}} />
                </Route>

                <Route path='/seller-item/:id'>
                    <SellItemFull data={{props,userData,globalData,sellerData}} />

                </Route>
            
            </BrowserRouter>

            
        </div>
    )
}
