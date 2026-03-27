import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { buttonCSS, inputCSS, theme } from "../theme";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  function handleSignup() {
    if (!user.name || !user.email || !user.password) {
      alert("All fields required");
      return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.find(u => u.email === user.email);
    if (exists) {
      alert("User already exists");
      return;
    }

    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful");
    navigate("/login");
  }

  return (
    <div style={{width:'100%', height:'100%',textAlign:'center', alignItems:'center', justifyContent:'center', display:'flex'}}>
          <div style={{width:'300px', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column', 
                  backgroundColor:'#fdffff',  gap:'10px', padding:'30px 20px 30px 20px', marginTop:'100px',
                   boxShadow:'1px 1px 1px 5px #84d8f6d2', borderRadius:'20px'}}> 
                          <h1 style={{width:'100%', fontSize:'40px', color:'blue' }} >Signup</h1>

                             <input name="name" placeholder="Name" style={inputCSS(theme)} onChange={handleChange} />
                              <input name="email" placeholder="Email" style={inputCSS(theme)} onChange={handleChange} />
                             <input name="password" placeholder="Password"  style={inputCSS(theme)}  onChange={handleChange} />

                             <button style={buttonCSS}  onClick={handleSignup}>Signup</button>
                             <button onClick={()=>navigate('/login')}>Already Redister</button>
          </div>
      </div>
  );
}