import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LogMeIn from './login';
import Register from './registration';



const initialFormValues= {
  username: '',
  email:'',
  password: '',
  /*text inputs*/
  seller:'false',
  /*seller status could be radio or dropdown*/






}



function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registering, setRegistering] = useState({});
  const [loggingIn, setLoggingIn] = useState(false);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(false);
{/*Sets up some states!*/}




  return (
    <div className="App">
      <LogMeIn />
      <Register />
      
    </div>
  );
}

export default App;
