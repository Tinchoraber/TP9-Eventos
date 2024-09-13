import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import styles from './contacto.module.css';

export default function Contacto() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>Contáctanos</h1>
        <form className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre" className={styles.label}>Nombre</label>
            <input type="text" id="nombre" className={styles.input} placeholder="Tu nombre" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="Tu email" />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje" className={styles.label}>Mensaje</label>
            <textarea id="mensaje" className={styles.textarea} rows="5" placeholder="Tu mensaje"></textarea>
          </div>
          <div className={styles.container_boton}>
          <button type="submit" className={styles.botonEnviar}>Enviar</button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
