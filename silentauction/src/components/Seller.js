import React,{useContext,useState} from 'react'
import {UserContext} from '../utils/context'

import UserSidePanel from './UserSidePanel'
import SellList from './SellList'
import Nav from './Nav'


export default function Seller() {
    const userData = useContext(UserContext)
    const [showSide,setShowSide] = useState(false)
    const [showMortal,setShowMortal] = useState(false)

    return (
        <div>
            < Nav />
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
             setShowSide={setShowSide} />
            :
            null
            }
            </div>

            <div>
                <SellList userData={userData} />
            
            </div>

            
        </div>
    )
}
