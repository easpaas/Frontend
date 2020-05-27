import React, {useState} from 'react';
import styled from 'styled-components';

const initialFormValues = {
    name: '',
    Email: '',
    password:'',
    seller: 'false'
}

const submit =(event) =>{
    
}
const onChange = (event) => {

}

function Register(props){
   const [formValues, setFormValues] = useState(initialFormValues);

    return(
        <div className="form Register" >
            <label>Register below:</h1>
            <label>Name:<input name="name" type="text" value ={formValues.username} /></label>
            <label>Email: <input name="name" type="text" value={formValues.email} /></label>
            <label>Password:<input name="password" type="password" value={formValues.password} /></label>
            <label>Seller?<input name="seller" /></label>
            <button onSubmit={submit}> Register!</button>
            {/*The registration form!*/}
        </div>
    )


}





export default Register