"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { TokenContext } from "@/app/context/TokenContext.js";
import { useContext } from "react";
const Header = () => {
  const { user, logout } = useContext(TokenContext);
  return (
    <div className={styles.header}>
      <div className={styles.primeros2}>
        <div className={styles.logo}>
        <Link href="../views/home">
          <Image src="/logo.png" alt="Logo" width={150} height={60} />
        </Link>
        </div>
        <Link className={styles.linkNav} href="../views/home">
          Home
        </Link>
        <Link className={styles.linkNav} href="../views/contacto">
          Contacto
        </Link>
        </div>
        <div className={styles.ultimos2}>
        <div className={styles.usuario}>
        <Image src="/usuario.png" alt="Logo" width={30} height={30} />
        <p className="usuario">{user?.result?.first_name}</p>
        </div>
        <button onClick={logout} className={styles.logoutButton}>Cerrar Sesión</button>
        </div>
    </div>
  );
};

export default Header;
