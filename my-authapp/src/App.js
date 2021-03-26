import './App.css';
import fire from "./fire.js";
import {useState,useEffect} from 'react';
import Login from "./Login";
import Home from "./Home";

function App() {
  const [users,setUsers] = useState(null)

  useEffect(() => {
    authListener();
  });
   
  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        console.log('user signed in')
      }
      else{
        console.log('no user')
      }
      setUsers(user);
    
    });
  }

  return (
    <div className="App">
          {users? <Home/>:<Login/>}
    </div>
  );
}

export default App;
