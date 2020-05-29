import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function UpdateForm(props) {
    const {push} = useHistory()
    const { updateItem,id} = props
    const initial = {
        title:'',
        category:'',
        description:'',
        openDate: Date.now(),
        closeDate:'',
        startingBid:'',

    }

    const [formValue,setformValue] = useState(initial)
    const [erros,setErrors]= useState(initial)


    const changeHandle = evt=>{
       
        setformValue({...formValue,[evt.target.name] : evt.target.value})
    }
    return (
        <div>
            <form>
            <input onChange={changeHandle} value={formValue.title} name='title'type='text ' />
            <select onChange={changeHandle} name='category'>
                <option >select category</option>
                <option value='electronics'>Electronics</option>
                <option value='home'>Home and Furniture</option>
                <option value='outside'>Outside Equipment</option>
                <option value='collectorItems'>Collectors Items</option>
            </select>

            <textarea  onChange={changeHandle} name='description' />

            <input  onChange={changeHandle} type='date' name='dateOpened'/>
            <input  onChange={changeHandle} type='date' name='dateClosed'/>
            <input  onChange={changeHandle} type='decimal' name='startingBid'/>

            <button onClick={()=>{
                updateItem(id,null,formValue)
                push('/seller-list')

                }} > send </button>

            
        </form>
        </div>
    )
}
