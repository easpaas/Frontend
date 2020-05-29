import React,{useState, useEffect} from 'react'
import Bids from './Bids'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const Div= styled.div`

    select{
        padding:1%;
        color:white;
        background:#696969;
        text-align:center;
        border-bottom:1px solid cornflowerblue;
        
       
    }
    .bidList{
        display:flex;
        justify-content:space-around;
        margin-top:2%;
        .bids{
            background:yellow;
            padding: 4%;
        }
        
    }


`


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
        <Div className='inner'>
                <select  onSelect={()=>{}} name='categorySearch'>
                <option >select category</option>
                <option className='choice' value='electronics'>Electronics</option>
                <option className='choice' value='home'>Home and Furniture</option>
                <option className='choice' value='outside'>Outside Equipment</option>
                <option className='choice' value='collectorItems'>Collectors Items</option>
                </select>

                <div className='bidList'>
                    {bidderData.bids.map((item,index)=>{
                        return <Link className='bids' to={`/bid/${item.id}`} >
                            <Bids item={item} key={index}  />
                            </Link>
                    })}

                </div>
            
        </Div>
    )
}
