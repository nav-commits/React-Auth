import './App.css';
import {useState} from 'react';
import fire from "./fire.js";

function App() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  login = e => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };


  signup = e => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .then(u => {
        console.log(u);
      })
      .catch(err => {
        console.log(err);
      });
  };



  return (
    <div className="App">
          <form>
          <input
            name="email"
            type="email"
            id="email"
            placeholder="enter email"
            onChange={handleChange}
            value={email}
          />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="enter password"
            onChange={handleChange}
            value={password}
          />
          <button onClick={login}>Login </button>
          <button onClick={signup}>Sign Up </button>
        </form>
    </div>
  );
}

export default App;