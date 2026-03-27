import { useNavigate } from "react-router-dom";
import {buttonCSS, theme} from'../theme'

export default function Navbar({ wallet }) {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("currentUser"));

  function handleLogout() {
    localStorage.removeItem("currentUser"); 
    navigate("/login"); 
  }


  return (
    <div className="navbar" style={{width:'100%',backgroundColor:theme.palette.background.default, display:'flex', flexDirection:'row',
                             paddingTop:'5px', paddingBottom:'5px', justifyContent:'center', alignItems:'center', color:'black' }}>
        <div style={{width:'80%', display:'flex', flexDirection:'row',justifyContent:'space-between',
                                    alignItems:'center', }}>
            <h2>Card Game</h2>

      <div>
        {user ? (
          <div style={{ display:'flex', gap:'10px', alignItems:'center' }}>
            <button style={buttonCSS(theme)}>👤 {user.name}</button>
            <button style={buttonCSS(theme)}> Wallet:  ₹{wallet}</button>

            {/* ✅ LOGOUT BUTTON HERE */}
            <button style={buttonCSS(theme)} onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <>
            <button style={buttonCSS(theme)} onClick={() => navigate("/login")}>Login</button>
            <button style={buttonCSS(theme)} onClick={() => navigate("/signup")}>Signup</button>
          </>
        )}
      </div>
        </div>
    </div>
  );
}