import React,{useContext} from "react";
import { AuthContext } from "../../context/auth";
import '../../App.css'

const Home = () => {
    const {logout} = useContext(AuthContext);
    const handleLogout = () => {
        logout();
    }

    return (
            <div className="App">
                <div id="msg"></div>
                <h1>Home</h1>
                <button onClick={handleLogout}>Logout</button>
            </div>
        );
    }
export default Home;