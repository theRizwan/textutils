
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [modedark, setmode] = useState('dark')
  const [setAlert, setsetAlert] = useState(null)
  const [mode, setmodeColor] = useState('black')
  
  let colortheme = (color) =>{
    setmodeColor(color)
    document.body.style.backgroundColor = color
  }
  let showAlert = (message,type) =>{
    setsetAlert({
      message,
      type
    })
    setTimeout(function(){
      setsetAlert(null)
    },1500)
  }
  let toggleMode = () => {
    if(modedark==='light'){
      setmode('dark')
      document.body.style.backgroundColor = 'white'
      showAlert("Dark Mode has been Enabled Successfully","Success")
      setTimeout(function(){
        setsetAlert(null)
      },1500)
    }else{
        setmode('light')
        document.body.style.backgroundColor = mode
        showAlert("Light Mode Light has been Enabled Successfully","Success")
        setTimeout(function(){
          setsetAlert(null)
        },1500)
    }
  }
  return (
    
    <Router>

    <Navbar title="TextUtils" about="About" modedark={modedark} mode={mode} colortheme={colortheme} toggleMode={toggleMode}/>
    <Alert alert={setAlert}/>
    <Switch>
        <Route exact path="/about">
          <About/>

          </Route>
          <Route exact path="/">

            <TextForm title="Enter the Text to Analyze Below" modedark={modedark} mode={mode} colortheme={colortheme} toggleMode={toggleMode} myalert={showAlert}/>

          </Route>
        </Switch>
   

    </Router>
    
  );
}

export default App;
