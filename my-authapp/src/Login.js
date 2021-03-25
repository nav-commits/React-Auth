import './App.css';
import {useState} from 'react';
import fire from "./fire.js";
import firebase from "firebase";

function Login() {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const googleProvider = new firebase.auth.GoogleAuthProvider()
  
  const signInWithGoogle = () => {
    firebase.auth().signInWithPopup(googleProvider).then((res) => {
      console.log(res.user)
    }).catch((error) => {
      console.log(error.message)
    })
  }


  const login = e => {
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

  const signup = e => {
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
          <form className="Form">
          <input
            name="email"
            type="email"
            id="email"
            placeholder="enter email"
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
          <input
            name="password"
            type="password"
            id="password"
            placeholder="enter password"
            onChange={e => setPassword(e.target.value)}
            value={password}
          />
          <button className="Submit" onClick={login}>Login </button>
          <button className="Submit" onClick={signup}>Sign Up </button>
          <button className="Submit" onClick={signInWithGoogle}>Googlesignin </button>
        </form>
    </div>
  );
}

export default Login;