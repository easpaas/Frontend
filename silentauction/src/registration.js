import React from 'react'

function Register(props){
    const{
        values,
        onInputChange,
        onSubmit,
        diabled,
        errors,
    } = props

    return(
        <div className="form Register" >
            <h1>Register below:</h1>
            <h3>Name:<input name="name" type="text" value ={values.username}/></h3>
            <h3>Email: <input name="name" type="text" value={values.email} /></h3>
            <h3>Password:<input name="password" type="password" value={values.password} /></h3>
            <button onSubmit={submit}> Register!</button>
            {/*The registration form!*/}
        </div>
    )


}

function submit(){
   



    {/*will post the users info into the database */}
}




export default Register