import React, { useEffect,useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import SellerItems from './SellerItems'
import SellItemFull from './SellItemFull'

export default function SellList(props) {
    const {itemFunctions,setGlobalData} = props.data.globalData
    const {userData} = props.data.userData
    const {getSellerItems} =itemFunctions
    const [sellerBids,setSellerBids]= useState([userData.createdBids])
    console.log(sellerBids)
    useEffect(()=>{
        getSellerItems(userData.id,setGlobalData)
    },[])
    
    return (
        <div>
            {sellerBids.map((item,index)=>{
               return <Link key={index} to={`/seller-item/${item[0].id}`}>
                    <SellerItems item={item} />
                </Link>
            })}
           
        </div>
    )
}
