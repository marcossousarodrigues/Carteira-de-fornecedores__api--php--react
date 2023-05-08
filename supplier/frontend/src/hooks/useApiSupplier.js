import { useContext, useEffect, useState } from "react"
import api from "../utils/api";
import { Context } from "../context/AuthContext";

export const useApiSupplier = () => {
    const [data, setData] = useState(null);
    const [requestData, setRequestData] = useState('');
    const [method, setMethod] = useState('')
    const [id, setId] = useState('');
    const [response, setRespose] = useState('');
    const {userId} = useContext(Context);


    const httpRequest = (methodParam, dataParam = {}, idParam = '') =>{
        if(methodParam === 'GET')
        {
            setMethod(methodParam);
        }
        else if(methodParam === 'POST')
        {
            setMethod(methodParam);
            setRequestData(dataParam);
        }
        else if(methodParam === 'DELETE')
        {   
            setMethod(methodParam);
            setId(idParam)
        }
        else if(methodParam === 'UPDATE')
        {
            setMethod(methodParam)
            setId(idParam)
        }
    }

    useEffect( ()=>{
        const fetch = async () => {
            if(method === "GET")
            {
                const res = await api.get('/api/supplier/'+userId);
            
                setData(res.data.data);
            }
            else if(method === "POST")
            {
                const res = await api.post('/api/supplier/', requestData);
                setRespose(res.data.data);
                console.log(res)
            }
            else if(method === "DELETE")
            {
                const res = await api.delete('/api/supplier/'+id);

                setRespose(res.data.data)
                setMethod("GET")
            }
            else if(method === "UPDATE")
            {
                const res = await api.put('/api/supplier/'+id)
            }
        }

        fetch();
    }, [method]);

    return {httpRequest, data, response}
}