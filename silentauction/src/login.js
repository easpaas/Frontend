import React from 'react';

function LogMeIn(){

return(
    <div className="form Login">
        <h1>Log in!</h1>
        <h3>Name:<input name="name" type="text" /></h3>
        <h3>Password:<input name="password" type="password" /></h3>
        <button>Log in</button>
    </div>  



)

}


export default LogMeIn