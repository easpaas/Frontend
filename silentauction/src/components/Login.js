import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as Yup from "yup";
const initialFormValues = {
  name: "",
  password: "",
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
function LogMeIn(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  useEffect(() => {
      formSchema.isValid(formValues).then(valid => {
      });
  }, [formValues]);
{/*disables button if form is valid*/}
  const onChange = (event) => {
      console.log(event.target.value)
      setFormValues({
          ...formValues,
          [event.target.name]: event.target.value
      });
  }
  const onClickhandl = (event) => {
      event.preventDefault()
      axios.post('http://localhost:5000/api/login',formValues)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }
  const [errors, setErrors] = useState({
      name: "",
      password:"",
  });
  return (
      <form className="Login">
          <h1>Log in!</h1>
          <h3>Name:<input name="username" type="text" value={formValues.username} onChange={onChange} /></h3>
          <h3>Password:<input name="password" type="password" value={formValues.password} onChange={onChange} /></h3>
          <button onClick={onClickhandl}>Log in</button>
          {/*The login form!*/}
      </form>
  )
}
export default LogMeIn
