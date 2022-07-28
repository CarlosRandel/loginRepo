import React, {useContext} from "react";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import { AuthContext, AuthProvider } from "./context/auth";


function RouterApp() {
    const Private = ({children})=>{
        const { isAuthenticated, loading } = useContext(AuthContext);
        if (loading) {
            return <div>Loading...</div>;
        }
            
        if(!isAuthenticated){
            return <Navigate to="/login" />
        }
        return children;
    }


    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route exact path="/" element={<Private><Home /></Private>} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
}
export default RouterApp;