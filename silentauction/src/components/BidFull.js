import React,{ useEffect,useState } from 'react'
import {useHistory} from 'react-router-dom'

export default function BidFull(props) {
    const {findItembyId} = props.data.globalData.itemFunctions
    const bids = props.data.bidderData.bidderData.bids
    const {setBidderData,bidderData} = props.data.bidderData
    const {updateItem, getItems} = props.data.globalData.itemFunctions
    const {setUserData,userData} = props.data.userData
    const {go,push,location} = useHistory()

    

    const [item,setItem]=useState(bids[0])
    const [bidValue,setBidValue]= useState(100.00)
    

    const user = props.data.userData.userData.username
   

    // }}
    const vave= String.prototype.replace(user,1,'*')
    useEffect(()=>{
        findItembyId(setItem)
        console.log('heyy you')
        
    },[])

    const placeBid =(evt)=>{
        evt.preventDefault()
       const newUser = user.split("")
       for(let i = 1; i <= newUser.length - 2;i++){
           newUser[i] = '*'
       }
       const userCoded = newUser.join("")
       const newbid = {name:userCoded,value:bidValue}
       setItem({...item,
        bidders:[...item.bidders,newbid],
        currentBid: item.currentBid + newbid.value
    })
        updateItem(item.id,setItem,item)
        getItems(setBidderData,bidderData,'bids')

        setUserData({...userData,watchlist:[...userData.watchlist,item]})
        // update user data
       console.log(item)
       console.log(userData)


    //    go(location.pathname)




    }

    return (
        <div>
            
                <h2>{item.title} </h2>
                <h3> {item.startingBid} </h3>
                <h4>{item.closeDate} </h4>
                <h6> {item.category} </h6>
                <form>
                    <input type='decimal' value={bidValue} placeholder='$ 100' />
                    <button onClick={placeBid}>Bid</button>
                </form>

                {item.bidders.map((bidder,index)=>{
                    return <div key={index}>
                        <p>{bidder.name} </p>
                        <p>{bidder.time} </p>

                        </div>
                })}
            
        </div>
    )
}
