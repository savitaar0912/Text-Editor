import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setmode] = useState('light')

  const removeallclass = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
  }

  const toggleMode = (cls) => {
    console.log(cls) 
    removeallclass()
    document.body.classList.add('bg-' + cls)
    setmode('bg-' + cls);
    document.body.style.backgroundColor = 'white';
    showalert(cls, `${cls} Mode Enabled`)
    setTimeout(() => {
      document.title = 'Textutils is used to manipulate texts'
    }, 1000);
    setTimeout(() => {
      document.title = 'Install Textutils'
    }, 1500);
  }

  const [alert, setalert] = useState(null)

  const showalert = (type, message) => {
    setalert({
      type: type,
      msg: message
    })
    setTimeout(() => {
      setalert(null)
    }, 2000);
  }

  return (
    <>
      <Router>
        <Navbar title="TextEditor" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3 w-75 ">
          <Routes>
            <Route exact path="/" element={<Textarea heading="Enter the Text" mode={mode} showalert={showalert} />}>
            </Route>
            <Route exact path="/about" element={<About mode={mode} />}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

