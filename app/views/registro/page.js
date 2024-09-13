"use client";
import { useState } from 'react';
import styles from './registro.module.css';
import { useRouter } from 'next/navigation';

export default function Registro() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [confirmarContraseña, setContraseñaConfirmada] = useState('');
  const router = useRouter();

  const validarRegistro = (e) => {
    e.preventDefault();
    
    // Validación de contraseña
    if (contraseña !== confirmarContraseña) {
      alert('Error, las contraseñas son distintas');
      return;
    }
    
    // Guardar datos en localStorage
    localStorage.setItem('nombreGuardado', nombre);
    localStorage.setItem('emailGuardado', email);
    localStorage.setItem('contraseñaGuardada', contraseña);

    // Redirigir a la página de login
    router.push('../../views/login');
  }

  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.registro}>Registro de Usuario</h2>
      <form onSubmit={validarRegistro} className={styles.form}>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Nombre" className={styles.inputField} />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className={styles.inputField} />
        <input type="password" value={contraseña} onChange={(e) => setContraseña(e.target.value)} placeholder="Contraseña" className={styles.inputField} />
        <input type="password" value={confirmarContraseña} onChange={(e) => setContraseñaConfirmada(e.target.value)} placeholder="Confirmar Contraseña" className={styles.inputField} />
        <button type="submit" className={styles.registerButton}>Registrarse</button>
      </form>
      <p className={styles.iflogin}>¿Ya tienes cuenta? <a href="../views/login">Inicia sesión aquí</a></p>
    </div>
  );
}
