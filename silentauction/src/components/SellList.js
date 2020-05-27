import React, { useEffect } from 'react'
import axios from 'axios'
import SellerItems from './SellerItems'

export default function SellList(props) {
    const {data} = props
    const {userData} = data
   
    return (
        <div>
        <h2> {userData.userData.username} </h2>
           
        </div>
    )
}
