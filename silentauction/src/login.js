import React, {useState} from 'react';
import styled from 'styled-components';

const initialFormValues = {
    name: "",
    password:""

}





function LogMeIn(props){
const [formValues,setFormValues] = useState(initialFormValues);

return(
    <div className="form Login">
        <h1>Log in!</h1>
        <h3>Name:<input name="name" type="text" /*value={'values.username'} */ /></h3>
        <h3>Password:<input name="password" type="password" /*value={'values.password'} */ /></h3>
        <button onSubmit={login}>Log in</button>
        {/*The login form!*/}
    </div>  



)

}

function login(){


{/* will process the login request*/}
}

export default LogMeIn