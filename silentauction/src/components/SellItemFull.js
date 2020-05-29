import React, {useEffect,useState} from 'react'
import {useHistory,useParams} from 'react-router-dom'
import UpdateForm from './UpdateForm'

export default function SellItemFull(props) {
    const {itemFunctions,setGlobalData} = props.data.globalData
    const {findItembyId, deleteItem,updateItem}= itemFunctions
    const {location,push} = useHistory()
    const {id }= useParams()
    const [showUpdateForm,setShowUpdateForm] = useState(false)
    
    
    const [item,setItem] = useState({})
    console.log(item)

    useEffect(()=>{
        findItembyId(id,setItem)

    },[])
    console.log(id)

    return (
        <div>
                <h2>    {item.title}        </h2>
                <h3>    {item.startingBid}  </h3>
                <h4>    {item.closeDate}    </h4>
                <p>     {item.description}  </p>
                <h6>    {item.category}     </h6>

                <button onClick={()=>setShowUpdateForm(!showUpdateForm)}> Update </button>
                {showUpdateForm ? <UpdateForm updateItem={updateItem} id={id} /> : null}

                <button onClick={()=>{
                    deleteItem(id)
                    push('/seller-list')
                }}> Delete item    </button>
            
        </div>
    )
}
