import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
  import {Home} from "./Components/Home";
  import Register from "./Components/Register";
  import Login from "./Components/Login";
  import PasswordForgotten from "./Components/PasswordForgotten";
  
  
  export const Navigation=()=> {
    
    return (
    <Router>
        <div className="Navigation">
        <Routes>
            <Route path="/home" element={<Home/>} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/kitchen" element={<Kitchen />} /> */}
            <Route path="/passwordForgotten" element={<PasswordForgotten />} />
            <Route path="/" element={<Login />} />

        </Routes>
        </div>
    </Router>
    );
  }
