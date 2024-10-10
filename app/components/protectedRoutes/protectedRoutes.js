'use client'

import { TokenContext } from "@/app/context/TokenContext.js";
import { useRouter } from "next/navigation";
import { useContext } from "react";

export const ProtectedRoutes = ({children}) => {
    const publicPages = ["/views/login", "/views/inicio", "/views/registro"];
    const router = useRouter();
    const {isLoggedIn} = useContext(TokenContext);
    const path = window.location.pathname;
    
    if(!isLoggedIn && !publicPages.includes(path)){
        //router.push("../views/login");
        window.location.href = "/views/login";
    }

    return children;
};