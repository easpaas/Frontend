import React from 'react'
import SellerItems from './SellerItems'

export default function SellList(props) {
    return (
        <div>
            {props.userData.selling.map((item,index)=>{
                return <SellerItems key={index} item={item}/>
            })}
        </div>
    )
}
