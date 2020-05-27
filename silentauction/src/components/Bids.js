import React from 'react'

export default function Bids(props) {
    const {item} = props
    return (
        <div>
            <h2>{item.title} </h2>
            <h3> {item.startingBid} </h3>
            <h4>{item.closeDate} </h4>
            <p> {item.description} </p>
            <h5> {item.category} </h5>
        {/* bidders */}
            <div>

            </div>
        </div>
    )
}
