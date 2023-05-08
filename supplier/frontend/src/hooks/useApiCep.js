import { useEffect, useState } from 'react';

export const useApi = () => {
    const [data, setData] = useState('cep')
    const [cep, setCep] = useState('');

    
    const feactDataCep = (cep) =>{
        setCep(cep)
    }

    useEffect( ()=>{
        const fetchCep = async () => {
            try
            {
                const newCep = cep.replace("-", "").replace(".", "");
                if(newCep.length === 8 )
                {
                    const res = await fetch('https://viacep.com.br/ws/'+cep+'/json/');
                    const json = await res.json();
                    setData(json);
                }
               
            }
            catch(error)
            {

            }
           
        }   

        fetchCep();
    }, [cep]);


    return {feactDataCep, data}
}
