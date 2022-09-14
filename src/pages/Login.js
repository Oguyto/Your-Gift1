import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login(){
    // React States
    const [password, setPassword] = useState();
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/Gift`; 
      navigate(path);
    }

    function handleChange (event) {
    if (event.target.value === "lune" || event.target.value === "Lune" || event.target.value === "la lune" || event.target.value === "La lune") {
        routeChange()
     }
     if ((event.target.value).length >= 4) {
      event.target.value = ""
    }
      return (setPassword(event.target.value))
    }

    return(
      <div className="login-wrapper">
          <h1>Enter The Correct</h1>
          <h3>Je brille de mille feu, mais je ne brule pas, je suis ? 4 lettres</h3>
          <input type="text" onChange={handleChange} />
      </div>
    )
}
export default Login;