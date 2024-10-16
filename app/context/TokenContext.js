"use client";
import {createContext, useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

export const TokenContext = createContext();
export const TokenProvider = ({children}) => {
    const [user, setUser] = useState({});
    const router = useRouter();
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser)); 
        }
      }, [setUser]);

    const login = (data) => {
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data); 
    }

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null); 
        router.push("./login");
    }
    

    

    return (
        <TokenContext.Provider value={{user, setUser, login, logout, isLoggedIn: !!user?.token}}>
            {children}
            
        </TokenContext.Provider>
    )

}
