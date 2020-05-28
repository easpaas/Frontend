import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const initialFormValues = {
    name: '',
    Email: '',
    password:'',
    seller: 'false'
}



function Register(props){
   const [formValues, setFormValues] = useState(initialFormValues);


   const onChange = (event) =>{
    setFormValues({
        ...formValues,
    [event.target.name]: event.target.value
    });



}
const onSubmit = (event) =>{
    axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}




    return(
        <div className="form Register" >
            <label>Register below:</label>
            <label>Name:<input name="name" type="text" value ={formValues.username} onChange={onChange}/></label>
            <label>Email: <input name="name" type="text" value={formValues.email} onChange={onChange}/></label>
            <label>Password:<input name="password" type="password" value={formValues.password} onChange={onChange}/></label>
            <label>Seller?<input name="seller" value="seller" type="radio" value={formValues.seller} onChange={onChange} /></label>
            <button onSubmit={onSubmit}> Register!</button>
            {/*The registration form!*/}
        </div>
    )


}





export default Register