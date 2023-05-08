import { useEffect, useState } from "react"
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export const useAuth = () =>{
    const [respose, setResponse] = useState('');
    const [authenticated, setAuthenticated] = useState('');
    const [userId, setUserId] = useState('');
    const navigate = useNavigate();
    

    useEffect( ()=>{
        const token = localStorage.getItem('token')
        const id = localStorage.getItem('userId');

        if(token)
        {  
            setAuthenticated(true)
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)} `
        }
        else
        {
            setAuthenticated(false)
        }

        if(id)
        {  
            setUserId(id)
        }
    }, [authenticated]);


    const login = async (user) =>{

        const res = await api.post('/api/user/login', user);

        console.log(res.data.data);

        setResponse({message: res.data.data.message, status: res.data.data.status});

        authUser(res.data.data);
        
    }

    const register = async (user) =>{
        const res = await api.post('/api/user/register', user)

        setResponse({message: res.data.data.message, status: res.data.data.status});

        authUser(res.data.data);

        console.log(res.data.data);

    }

    const authUser = (data) =>{
        
        if(data.status === "success")
        {
            const userId = data.user[0];
            const token  = data.token;
    
            localStorage.setItem("userId", userId);
            localStorage.setItem("token", JSON.stringify(token));
            console.log('login')
            navigate('/list');
            window.location.reload(true);
        }
    }

    const logout = () =>{
        setAuthenticated(false)
        localStorage.removeItem('token');
        localStorage.removeItem('userId'); 
        window.location.reload(true);
    }

    return {login, register, respose, authenticated, userId, logout}
}
