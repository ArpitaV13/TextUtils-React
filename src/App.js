
import { useState } from 'react';
import './App.css';
import About from "./Components/About";
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

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
      
      <Router>
     <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
     <Alert alert={alert} />
     <div className="container">

    <Routes>
    <Route exact path='/' element={ <TextForm heading="Try TextUtils - Word Counter | Character Counter and many more..." mode={mode} showAlert={showAlert}/>} />
    <Route exact path='/about' element={ <About mode={mode}/>} />
     
      </Routes>
     </div>
     </Router>
     
    </div>
   
    
  );
}

export default App;

