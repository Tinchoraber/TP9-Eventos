"use client";
import {createContext, useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const TokenContext = createContext();
export const TokenProvider = ({children}) => {
    const [user, setUser] = useState({});
    const router = useRouter();
    useEffect(() => {
        const storedUser =  Cookies.get("user"); /*localStorage.getItem("user");*/
        if (storedUser) {
          setUser(JSON.parse(storedUser.replaceAll("%22", "'"))); 
        }
      }, [setUser]);

    const login = (data) => {
        //localStorage.setItem("user", JSON.stringify(data));
        Cookies.set("user", JSON.stringify(data));
        setUser(data); 
    }

    const logout = () => {
        Cookies.remove("user");
        //localStorage.removeItem("user");
        setUser(null); 
        router.push("./login");
    }
    

    

    return (
        <TokenContext.Provider value={{user, setUser, login, logout, isLoggedIn: !!user?.token}}>
            {children}
            
        </TokenContext.Provider>
    )

}
