import styles from './registro.module.css';

export default function Registro() {
  return (
    <div className={styles.registerContainer}>
      <h2 className={styles.registro}>Registro de Usuario</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Nombre" className={styles.inputField} />
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Contraseña" className={styles.inputField} />
        <button type="submit" className={styles.registerButton}>Registrarse</button>
      </form>
      <p className={styles.iflogin}>¿Ya tienes cuenta? <a href="/login">Inicia sesión aquí</a></p>
    </div>
  );
}

