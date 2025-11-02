import React from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate= useNavigate();

    const handleLogin= ()=>{
        localStorage.setItem("authtoken", "tokenbareer")
        navigate("/dashboard")
    }

  return (
    <div>
        <h2>This is login Page</h2>
        <button style={{marginTop:"20px"}} onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login