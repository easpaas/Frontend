import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as Yup from "yup";

const initialFormValues = {
    name: "",
    Email: "",
    password: "",
    seller: "false",
    disabled: "false"
}






const formSchema = Yup.object().shape({
    name: Yup
        .string()
        .min(2, "name must be longer than 2 characters")
        .required('you must have name...right?'),
    password: Yup
        .string()
        .min(7, "Passwords must be atleast 7 characters long")
        .required("Must include password"),
    seller: Yup
        .boolean()
});





function Register(props) {
    const [formValues, setFormValues] = useState(initialFormValues);

    useEffect(() => {
        formSchema.isValid(formValues).then(valid => {

        });
    }, [formValues]);
    {/*disables button if form is valid*/}
    const onChange = (event) => {
        setFormValues({
            ...formValues,
            [event.target.name]: event.target.value
        });
    


    }
    const onSubmit = (event) => {
       console.log(event.target.seller)
        event.preventDefault();
        axios.post('https://silent-auction2-backend.herokuapp.com/api/auth/register', {
            name: formValues.name,
            password: formValues.password,
            seller: formValues.seller
        })
            .then((response) => {
                console.log(response);
            }, (error) => {
                console.log(error);
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    const [errors, setErrors] = useState({
        name:"",
        password:"",
        seller: ""
    });



    return (
        <form className="Register" >
            <label>Register below:</label>
            <label><h1>Name: <input name="name" type="text" value={formValues.username} onChange={onChange} /> </h1></label>
            <label><h1>Password:<input name="password" type="password" value={formValues.password} onChange={onChange} /></h1></label>
            <label><h1>Seller?  <input name="seller" value="true" type="checkbox" onChange={onChange} /> </h1></label>
            <button onSubmit={onSubmit}> Register!</button>
            {/*The registration form!*/}
        </form>
    )


}





export default Register