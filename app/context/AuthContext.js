"use client";
import {createContext, useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);
    const router = useRouter();
    useEffect(() =>{
        const nombreGuardado = localStorage.getItem('nombreGuardado');
        if(nombreGuardado){
            setUsuario(nombreGuardado);
        }
    }, [])

    const login = (nombre) => {
        setUsuario(nombre);
        localStorage.setItem('nombreGuardado', nombre);
    }

    const logout = () => {
        setUsuario(null);
        localStorage.removeItem('nombreGuardado');
        localStorage.removeItem('emailGuardado');
        localStorage.removeItem('contraseñaGuardada');
        router.push('../views/login')
    }

    return (
        <AuthContext.Provider value={{usuario, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;