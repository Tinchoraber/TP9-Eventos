"use client";
import {createContext, useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

export const TokenContext = createContext();
export const TokenProvider = ({children}) => {
    const [token, setToken] = useState();
    const router = useRouter();
    useEffect(() =>{
        const storedToken = localStorage.getItem('token');
        if(storedToken){
            setToken(storedToken);
        }
    }, [])

    const saveToken = (newToken) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    }

    

    return (
        <TokenContext.Provider value={{token, saveToken, isLoggedIn: !!token}}>
            {children}
        </TokenContext.Provider>
    )
}
