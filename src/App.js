
import { useState } from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");
  

  const [alert,setAlert]=useState(null);
    const showAlert=(message,type)=>{
        setAlert({
          msg:message,
          type:type  
        })
        setTimeout(()=>{
          setAlert(null);
        },3000);
    }

  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#052b64";
      showAlert("Dark Mode has been enabled","success");
    }
    
      else{
        document.body.style.backgroundColor="white";
        setMode("light")
        showAlert("Light Mode has been enabled","success");
      }
  }

  return (
    <div className='App'>
      

     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
     <div className="container">
     <TextForm heading="Hi!!! My Name is Arpita Verma " mode={mode} showAlert={showAlert}/>

     
  
     </div>
  
     
    </div>
   
    
  );
}

export default App;

