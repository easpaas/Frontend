import React from 'react';

function LogMeIn(props){
    const{
        values,
        onInputChange,
        onSubmit,
        diabled,
        errors,
    } = props


return(
    <div className="form Login">
        <h1>Log in!</h1>
        <h3>Name:<input name="name" type="text" value={values.username}/></h3>
        <h3>Password:<input name="password" type="password" value={values.password} /></h3>
        <button onSubmit={login}>Log in</button>
        {/*The login form!*/}
    </div>  



)

}

function login(){


{/* will process the login request*/}
}

export default LogMeIn