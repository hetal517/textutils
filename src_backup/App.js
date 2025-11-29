import './App.css';
//import About from './componet/About';
import Alr from './componet/Alr';
import Navbar from './componet/Navbar';
import TextForm from './componet/TextForm';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//navbar nuu che aa............. 
let name="Hetal";
function App() {
   const [mode, setMode] = useState('light');
   const [alert, setAlert] = useState(null);

   const showAlert = (message , type)=>
   {
       setAlert({
            msg:message,  
            type:type
       })
       setTimeout(() =>{
        setAlert(null);
       },3000)
   }

  const toggleMode = ()=>
   {
      if(mode === 'light')
      {
        setMode('dark');
        document.body.style.backgroundColor = 'grey';
        showAlert("Dark mode has been enabled" , "success")
        document.title = "TextUtils - Dark mode";
      }
      else
      {
        setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert("light mode has been enabled" , "success")
           document.title = "TextUtils - Light mode";
      }
   }

  return (
    <>    
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alr alert={alert} />

      <div className="container my-3">
        {/* Router aur Routes sab comment kiya */}
        {/* <Routes>
            <Route path="/about" element={<About />} /> 
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />} />
        </Routes> */}

        {/* Direct component render karein */}
        <TextForm showAlert={showAlert} heading="Enter text to analyze" mode={mode} />
      </div>
    </>
);
}
export default App;