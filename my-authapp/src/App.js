import './App.css';
import fire from "./fire.js";
import {useState,useEffect} from 'react';

function App() {
  const [users,setUsers] = useState({})

  useEffect(() => {
    authListener();
    },[]);

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      console.log(user);
      if (user) {
        setUsers(user );
      } else {
        setUsers({ user: null });
      }
    });
  }

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
