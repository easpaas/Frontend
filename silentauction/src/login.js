import React from 'react';

function LogMeIn(){

return(
    <div className="form Login">
        <h1>Log in!</h1>
        <h3>Name:<input name="name" type="text" value=""/></h3>
        <h3>Password:<input name="password" type="password" value="" /></h3>
        <button onSubmit=" ">Log in</button>
        {/*The login form!*/}
    </div>  



)

}


export default LogMeIn