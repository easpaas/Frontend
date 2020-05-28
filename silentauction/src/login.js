import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';




const initialFormValues = {
    name: "",
    password:""

}





function LogMeIn(props){
const [formValues,setFormValues] = useState(initialFormValues);



const onChange = (event) =>{
    console.log(event.target.value)
    setFormValues({
        ...formValues,
    [event.target.name]: event.target.value
    });



}
const onSubmit = (event) =>{
 
console.log(event)

}



return(
    <div className="form Login">
        <h1>Log in!</h1>
        <h3>Name:<input name="name" type="text" value={formValues.username} onChange={onChange} /></h3>
        <h3>Password:<input name="password" type="password" value={formValues.password} onChange={onChange} /></h3>
        <button onSubmit={onSubmit}>Log in</button>
        {/*The login form!*/}
    </div>  



)

}

function login(){


{/* will process the login request*/}
}

export default LogMeIn