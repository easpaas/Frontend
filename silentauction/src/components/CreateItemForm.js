
import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'


import * as Yup from 'yup'


const Form = styled.form `
    display:flex;
    flex-direction:column;
    input{
        width:60%;
        margin:2% auto;
        text-align:center;
        padding:2%;
        box-shadow:0 0 2px black;
        border-radius:4px;

    }
    textarea{
        width:60%;
        margin:1% auto;
        height:8rem;
        font-size:1.6rem;


    }
    select{
        width:60%;
        margin:1% auto;
    }


    #price,#open,#close{
        width:30%;
    }
    div{
        display:flex
    }
`

export default function CreateItemForm(props) {
    const {postItem} = props.data.globalData.itemFunctions
    const {push} = useHistory()
    
    const initial = {
        title:'',
        category:'',
        description:'',
        openDate: '',
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
        openDate: Yup
        .string()
        .required('You must chose a open date '),
        closeDate: Yup
        .string()
        
        .required('You must choose a day for bidding to close '),
        startingBid: Yup
        .number('must enter a number')
        .required('Must enter a start date greater than 0')


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
        <Form>
            <input placeholder='title' onChange={changeHandle} value={formValue.title} name='title'type='text ' />
            
            <select onChange={changeHandle} name='category'>
                <option >select category</option>
                <option value='electronics'>Electronics</option>
                <option value='home'>Home and Furniture</option>
                <option value='outside'>Outside Equipment</option>
                <option value='collectorItems'>Collectors Items</option>
            </select>

            <textarea  onChange={changeHandle} name='description' />
            <div> 
                <input id='open' placeholder='open date' onSelect={changeHandle} type='date' name='openDate' />
                <input id='close' placeholder='close date' onSelect={changeHandle} type='date' name='closeDate' />
                <input id='price' placeholder=' Starting Bid' onChange={changeHandle} type='decimal' name='startingBid' />


            </div>
           
            
            <button onClick={()=> {
                postItem(formValue,console.log)
                push('/seller-list')
                }}> send </button>

            
        </Form>
    )
}
