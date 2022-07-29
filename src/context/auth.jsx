import {createContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin} from '../service/api';
import { api } from '../service/api';
const AuthContext = createContext({});


const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const recoveredUser = localStorage.getItem('user');
        if (recoveredUser) {
            setUser(JSON.parse(recoveredUser));
        }
        setLoading(false);
    }, []);

    const login = async (email, password) => {
        const response = await postLogin(email, password)
        const user = response.data.user.name;
        const status = response.status;
        if(status === 200){
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        }
        const token = response.data.token;
        localStorage.setItem('token', token);
        api.defaults.headers.Authorization = `Bearer ${token}`;
        
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = null;
        setUser(null);
        setToken(null);
        navigate('/login');
    }

    return (
        <AuthContext.Provider value={{isAuthenticated: !!user,token, loading ,user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export  { AuthContext, AuthProvider };
