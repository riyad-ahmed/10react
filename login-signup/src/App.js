import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/LoginSignUp/Login';
import SignUp from './Components/LoginSignUp/SignUp';
import React from "react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>  
        <Route path="/SignUp" element={<SignUp/>}/> 
        <Route path="/Login" element={<Login/>}/>   
      </Routes>
    </>
  );
}

export default App;
