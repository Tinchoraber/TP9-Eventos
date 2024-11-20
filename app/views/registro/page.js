"use client";
import { useState } from 'react';
import styles from './registro.module.css';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';
import { TokenContext } from '../../context/TokenContext.js';
export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setContraseñaConfirmada] = useState('');
  const [emailValido, setEmailValido] = useState(null);
  const [nombreValido, setNombreValido] = useState(null);
  const [apellidoValido, setApellidoValido] = useState(null);
  const [contraseñaValida, setContraseñaValida] = useState(null);
  const [confirmarContraseñaValida, setConfirmarContraseñaValida] = useState(null);
  const router = useRouter();
  const { setUser } = useContext(TokenContext); 

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

  const handleNombreChange = (e) => {
    const value = e.target.value;
    setNombre(value);
    if (value === "") {
      setNombreValido(null);
    } else {
      setNombreValido(value.length > 0);
    }
  };

  const handleApellidoChange = (e) => {
    const value = e.target.value;
    setApellido(value);
    if (value === "") {
      setApellidoValido(null);
    } else {
      setApellidoValido(value.length > 0);
    }
  };

  const handleContraseñaChange = (e) => {
    const value = e.target.value;
    setContraseña(value);
    if (value === "") {
      setContraseñaValida(null);
    } else {
      setContraseñaValida(value.length >= 6);
    }
  };

  const handleConfirmarContraseñaChange = (e) => {
    const value = e.target.value;
    setContraseñaConfirmada(value);
    if (value === "") {
      setConfirmarContraseñaValida(null);
    } else {
      setConfirmarContraseñaValida(value.length >= 6);
    }
  };

  const isFormValid = () => {
    return (
      nombreValido && apellidoValido && emailValido && contraseñaValida && confirmarContraseñaValida
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid()) return;
 
    if (contraseña !== confirmarContraseña) {
      alert('Error, las contraseñas son distintas');
      return;
    }
    

    try {
      const response = await fetch("http://localhost:3000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, contraseña, nombre, apellido }),
      } );
      console.log(response)
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        router.push('../../views/login');
      }
      else {
        console.log("Error al registrar el usuario.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.registro}>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input type="text" value={nombre} onChange={handleNombreChange} placeholder="Nombre" className={styles.inputField} required/>
        <input type="text" value={apellido} onChange={handleApellidoChange} placeholder="Apellido" className={styles.inputField} required/>
        <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" className={styles.inputField} required/>
        <input type="password" value={contraseña} onChange={handleContraseñaChange} placeholder="Contraseña" className={styles.inputField} required/>
        <input type="password" value={confirmarContraseña} onChange={handleConfirmarContraseñaChange} placeholder="Confirmar Contraseña" className={styles.inputField} required/>
        <button type="submit" disabled={!isFormValid()} className={styles.registerButton}>Registrarse</button>
      </form>
      <p className={styles.iflogin}>¿Ya tienes cuenta? <a href="../views/login">Inicia sesión aquí</a></p>
    </div>
  );
  }
