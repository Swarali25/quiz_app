import './App.css';
import Quiz from "./components/Quiz.js"
import { useState } from "react"
import Alert from './components/Alert';
import Navbar from './components/Navbar';

function App() {
  const [alert,setAlert] = useState(null)
  const [mode,setMode] = useState("light")


  const showAlert = (type,message) => {
     setAlert({
      type:type,
      message:message
     })
     setTimeout(()=>{setAlert(null)},2000)
  }
  const toggleMode = () => {
    if(mode === "light")
    {
      setMode("dark")
      document.body.style.backgroundColor ="black"
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor ="white";
    }
  }
  return (
    <>
     <Navbar mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <Quiz title="Quick Quiz" showAlert = {showAlert} mode={mode} />
    </>
  );
}

export default App;
