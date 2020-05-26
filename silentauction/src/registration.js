import React from 'react'

function Register(){


    return(
        <div className="form Register" >
            <h1>Register below:</h1>
            <h3>Name:<input name="name" type="text" value =""/></h3>
            <h3>Email: <input name="name" type="text" value="" /></h3>
            <h3>Password:<input name="password" type="password" value="" /></h3>
            <button onSubmit=""> Register!</button>
            {/*The registration form!*/}
        </div>
    )


}






export default Register