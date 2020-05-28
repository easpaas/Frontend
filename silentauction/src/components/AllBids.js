import React,{useState, useEffect} from 'react'
import Bids from './Bids'
import { Link } from 'react-router-dom'

export default function AllBids(props) {
    const {getItems} = props.data.globalData.itemFunctions

    const {bidderData,setBidderData} = props.data.bidderData
    
    // const [bids,setBids] = useState([{
    //     id:1,
    //     title:'ricks ticks',
    //     startingBid:300,
    //     closeDate:'12/4/2020',
    //     description:'smells great',
    //     category:'outside',
    //     bidders:[],
        


    // }])
    console.log(getItems)

    useEffect(()=>{
        getItems(setBidderData,bidderData,'bids')

    },[])
    return (
        <div>
                <select onSelect={()=>{}} name='categorySearch'>
                <option >select category</option>
                <option value='electronics'>Electronics</option>
                <option value='home'>Home and Furniture</option>
                <option value='outside'>Outside Equipment</option>
                <option value='collectorItems'>Collectors Items</option>
                </select>

                <div>
                    {bidderData.bids.map((item,index)=>{
                        return <Link to={`/bid/${item.id}`} >
                            <Bids item={item} key={index}  />
                            </Link>
                    })}

                </div>
            
        </div>
    )
}
