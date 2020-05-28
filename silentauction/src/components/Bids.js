import React from 'react'

export default function Bids(props) {
    const {item} = props
    return (
        <div>
            <h2>{item.title} </h2>
            <h3> {item.startingBid} </h3>
            <h4>{item.closeDate} </h4>
            <h6> {item.category} </h6>
        {/* bidders */}
            <div>

            </div>
        </div>
    )
}
