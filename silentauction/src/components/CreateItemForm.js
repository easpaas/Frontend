import React,{useState} from 'react'
import * as Yup from 'yup'

export default function CreateItemForm() {

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
    const [formValid,setFormValid] = useState(false)

    useEffect(()=>{
        formScheme.isValid(formValue)
        .then(setFormValid(!formValid))
    },
    [formValue])

  
    const formScheme = Yup.object().shape({
        title: Yup 
        .string()
        .min(5,'Title must be at least 5 characters')
        .max(25, 'Max length is 25 characters'),
        category: Yup
        .string()
        .required(' 😺You must select a category 😺'),
        description:Yup
        .string()
        .notRequired()
        .max(140,'You have exceded the limit for characters in description'),
        closeDate: Yup
        .date()
        
        .required('You must choose a day for bidding to close '),
        startingBid: Yup
        .number()
        .required('Must enter a start date greater than 0')
        .moreThan(0,'Cannot set bid for 0')


    })
    const changeHandle = evt=>{
        evt.persist()
        Yup.reach(formScheme,evt.target.name)
        .validate(evt.target.value)
        .then(()=>{
            setErrors({...erros,[evt.target.name]:''})
        })
        .catch(err=>{
            setErrors({...erros,[evt.target.name]:err.errors[0]})
        })
        
        setformValue({...formValue,[evt.target.name] : evt.target.value})
    }


    return (
        <form>
            <input name='title'type='text ' />
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
            <input  onChange={changeHandle} type='number' name='startingBid'/>

            
        </form>
    )
}
