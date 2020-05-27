import React,{useState} from 'react'
import Bids from './Bids'
import { Link } from 'react-router-dom'

export default function AllBids() {
    const bids = useState([])
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
                    {bids.map((item,index)=>{
                        return <Link >
                            <Bids item={item} />
                            </Link>
                    })}

                </div>
            
        </div>
    )
}
