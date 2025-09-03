import { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Hello({setusername}) {
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[repeatpassword,setrepeatpassword]=useState("");
    const navigate =useNavigate();
    function handlenamechange(e){
        setname(e.target.value)
    }
    function handleemailchange(w){
        setemail(w.target.value)
    }
    function handlepasswordchange(t){
        setpassword(t.target.value)
    }
    function handlerepeatpasswordchange(p){
        setrepeatpassword(p.target.value)
    }
    
     function handleSubmit(g){
        g.preventDefault();
          
           if(!name||!email||!password||!repeatpassword){
            alert("please fill all details");
            return;
           }
           if(password!=repeatpassword){
            alert("password do not match");
            return;
           }
           else{
            alert("login succesfull")
           }
           
          
           
            
           setpassword("")
           setemail("")
           setrepeatpassword("")
           setusername(name);
           navigate("/Home")
           
        }
           
     
      
  return (
         <div className="out">

        <h2 className="text">Sign Up</h2> 
        <br/>
        <h3 className="para"> Get the most out of your favorite<br/> healthy recipie app</h3> <br/>
        <div className="form">
        <form onSubmit={handleSubmit}>
            <label></label>
            <input className="input" 
            type='text'
            value={name}
            placeholder=" Name"
            onChange={handlenamechange}/>
           <br/><br></br>
          <label></label> 
            <input className="input" 
            type='email'
            value={email}
            placeholder=" Youremail@gmail.com"
            onChange={handleemailchange}/>
             <br/><br></br>
           <label></label>
           <input className="input" 
           type='password'
           value={password}
           placeholder=" Password"
           onChange={handlepasswordchange}
           />
             <br/><br></br>
            <label></label>
           <input className="input" 
           type='password'
           value={repeatpassword}
           placeholder=" RepeatPassword"
           onChange={handlerepeatpasswordchange}
           />
           <br></br>
           <button type="submit">Submit</button>
            </form>
        </div>
</div>
  )
}
export default Hello;