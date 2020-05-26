import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LogMeIn from './login';
import Register from './registration';
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [registering, setRegistering] = useState({});
  const [loggingIn, setLoggingIn] = useState(false);
{/*Sets up some states!*/}




  return (
    <div className="App">
      <LogMeIn />
      <Register />
      
    </div>
  );
}

export default App;
