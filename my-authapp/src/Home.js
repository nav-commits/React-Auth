import './App.css';
import fire from "./fire.js";
import {useEffect,useState} from 'react';

function Home() {
  const [useremail,setemailUsers] = useState('')
  const [loading,setLoading] = useState(false)

  const logout = () => {
    fire.auth().signOut();
    };

    useEffect(() => {
      authListener();
      setLoading(true)
      setTimeout(() => {setLoading(false)}, 2000);
    },[]);
     
    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if(user){
          console.log('user signed in')
          setemailUsers(user.email)
        }
        else{
          console.log('no user')
        }
      });
    }

  return (
  
    <div className="App">
        {loading === true ? (
          <div className="App">
              <h1>Loading User...</h1>
          </div>
        ) : (
          <div className="App">
             <h1>Logged In</h1>
              <button className="Submit" onClick={logout}>Logout</button>
             <h1>{useremail}</h1> 
          </div>
        )}
    </div>
      
   
  );
}

export default Home;