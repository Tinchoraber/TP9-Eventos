import styles from './login.module.css';

export default function Login() {
  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.iniciarsesion}>Iniciar Sesión</h2>
      <form className={styles.form}>
        <input type="email" placeholder="Email" className={styles.inputField} />
        <input type="password" placeholder="Contraseña" className={styles.inputField} />
        <button type="submit" className={styles.loginButton}>Ingresar</button>
      </form>
      <p className={styles.ifregistro}>¿No tienes cuenta? <a href="../views/registro">Regístrate aquí</a></p>
    </div>
  );
}


