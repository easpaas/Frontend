import React from 'react'

export default function BidderWatchList(props) {
    const {data} = props
    const { userData} = data
    return (
        <div>
        <h1> {userData.userData.username} </h1>
            
        </div>
    )
}
