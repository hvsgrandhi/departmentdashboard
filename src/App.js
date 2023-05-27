import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  async function requestPermission(){
   const permission = await Notification.requestPermission()
   if(permission === 'granted'){
    //generated token
   }else if(permission === 'denied'){
    alert("You denied for latest updates:(");
   }
  }

  useEffect(()=>{
    requestPermission();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
