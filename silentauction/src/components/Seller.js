import React,{useContext,useState} from 'react'
import {UserContext,GlobalContext,SellerContext} from '../utils/context'

import UserSidePanel from './UserSidePanel'
import SellList from './SellList'
import Nav from './Nav'
import CreateMortal from './CreateMortal'


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

            {showSide ? < UserSidePanel 
            userData ={userData}
            showMortal={showMortal}
             setShowMortal={setShowMortal} 
             data={{userData,sellerData,props}}
             setShowSide={setShowSide} />

            :
            null
            }
            
            </div>

            <div>
                <SellList data={{props,userData,globalData,sellerData}} />
            
            </div>

            
        </div>
    )
}
