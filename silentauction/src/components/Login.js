import React,{useEffect} from 'react'
import axios from 'axios'

export default function Login() {
    useEffect(()=>{
        axios.post('https://silent-auction2-backend.herokuapp.com/api/auth/register',{username:'tom',password:'ljdj'})
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    })
    return (
        <div>
            
        </div>
    )
}
