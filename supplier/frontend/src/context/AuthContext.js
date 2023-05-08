
// criar context
import { createContext, useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth';

const Context = createContext();

function AuthProvider({children})
{
    const {authenticated, userId, logout} = useAuth()
    const [messageResponseText, setMessageResponseText] = useState('');

    return <Context.Provider value={{authenticated, userId, logout}}>{children}</Context.Provider>

}

export {Context, AuthProvider}