"use client";
import { useContext, useState } from 'react';
import { TokenContext } from '../../context/TokenContext.js';
import styles from './login.module.css';
import { useRouter } from 'next/navigation';

export default function Login() {
  const { login } = useContext(TokenContext)
  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [contraseñaValida, setContraseñaValida] = useState('');
  const router = useRouter()
  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value === "") {
      setEmailValido(null);
    } else {
      const emailRegla = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailValido(emailRegla.test(value));
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setContraseña(value);
    if (value === "") {
      setContraseñaValida(null);
    } else {
      setContraseñaValida(value.length >= 6);
    }
  };

  const isFormValid = () => {
    return (
      emailValido && contraseñaValida
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contraseña }),
      });
      const data = await response.json();
      login(data)
      if (response.ok) {
        router.push("../../views/home");
      } else {
        console.log("Email o contraseña incorrectos.");
      }
    } catch (error) {
      console.log("Error al conectar con la api.");
      console.log(error);
    }
  };
  
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.iniciarsesion}>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" className={styles.inputField} />
        <input type="password" value={contraseña} onChange={handlePasswordChange} placeholder="Contraseña" className={styles.inputField} />
        <button type="submit" disabled={!isFormValid()} className={styles.loginButton}>Ingresar</button>
      </form>
      <p className={styles.ifregistro}>¿No tienes cuenta? <a href="../views/registro">Regístrate aquí</a></p>
    </div>
  );
}


