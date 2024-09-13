"use client";
import { useContext, useState } from 'react';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';
import AuthContext from '../../context/AuthContext.js'

export default function Login() {
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const router = useRouter()
  const {login} = useContext(AuthContext)
  const validarLogin = (e) =>{
    e.preventDefault();
    const emailGuardado = localStorage.getItem('emailGuardado');
    const contraseñaGuardada = localStorage.getItem('contraseñaGuardada');
    const nombreGuardado = localStorage.getItem('nombreGuardado');

    if(email != emailGuardado || contraseña != contraseñaGuardada){
      alert('Error, el email o la contraseña es incorrecto');
      return;
    }
    login(nombreGuardado);
    router.push('../../views/home')
  }
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.iniciarsesion}>Iniciar Sesión</h2>
      <form onSubmit={validarLogin} className={styles.form}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.inputField} />
        <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)}placeholder="Contraseña" className={styles.inputField} />
        <button type="submit" className={styles.loginButton}>Ingresar</button>
      </form>
      <p className={styles.ifregistro}>¿No tienes cuenta? <a href="../views/registro">Regístrate aquí</a></p>
    </div>
  );
}


