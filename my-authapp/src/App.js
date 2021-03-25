import './App.css';
import fire from "./fire.js";
import {useState,useEffect} from 'react';
import Login from "./Login";
import Home from "./Home";

function App() {
  const [users,setUsers] = useState({})

  useEffect(() => {
    authListener();
    },[]);

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (users) {
        setUsers(user );
      } else {
        setUsers( {user: null });
      }
    });
  }

  return (
    <div className="App">
      {users? <Home/>: <Login/>}
    </div>
  );
}

export default App;
