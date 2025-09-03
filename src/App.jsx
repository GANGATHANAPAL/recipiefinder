import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hello from "./Hello";   // your login page
import Home from "./Home";     // your home page component

import { useState } from "react";
function App() {
    const [username,setusername]=useState("") 
     return (
      
    <Router>
      <Routes>
        <Route path="/" element={<Hello setusername={setusername} />} />
        <Route path="/home" element={<Home  username={username}/>} />
        
        
      </Routes> 
    </Router>
    
  );
}

export default App;
