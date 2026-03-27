import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonCSS, inputCSS, theme } from "../theme";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleLogin() {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      u => u.email === data.email && u.password === data.password
    );

    if (!user) {
      alert("Invalid credentials");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));

    alert("Login successful");
    navigate("/");
  }

  return (
    <div className="login" style={{width:'100%', height:'100%',textAlign:'center', alignItems:'center', justifyContent:'center', display:'flex'}}>
            <div style={{width:'300px', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', 
                  backgroundColor:'#fdffff',  gap:'10px', padding:'30px 20px 30px 20px', marginTop:'100px',
                   boxShadow:'1px 1px 1px 5px #84d8f6d2', borderRadius:'20px'}} >
                  <h1 style={{width:'100%', fontSize:'40px', color:'blue' }}>Login</h1>

                   <input name="email" placeholder="Email" style={inputCSS(theme)} onChange={handleChange} />
                   <input name="password" placeholder="Password" style={inputCSS(theme)} onChange={handleChange} />

                   <button style={buttonCSS(theme)} onClick={handleLogin}>Login</button>
                   <button style={{backgroundColor:'#ffffff00', padding:'10px 20px 10px 20px', borderRadius:'20px'}}  onClick={()=> navigate('/signup')}>Create an Account</button>
            </div>

    </div>
  );
}