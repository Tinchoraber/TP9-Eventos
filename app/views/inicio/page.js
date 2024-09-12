import Link from 'next/link';
import styles from './inicio.module.css';
import Image from 'next/image';
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Inicio() {
    return (
        <>
        <Header></Header>
        <div className={styles.padre}>
            <main className={styles.main}>
                <Image
                    src="/logo.png"
                    width={1000}
                    height={250}
                    alt="Logo"
                    className={styles.img}
                />
                <h1 className={styles.h1}>¡Bienvenido!</h1>
                <p className={styles.d}>¡Encuentra todo lo que quieras aquí!</p>
                <hr className={styles.clasHR} />
                <div className={styles.bon}>
                    <Link className={styles.botonIngresar} href="../../views/login">Iniciar sesion</Link>
                    <Link className={styles.botonRegistrarse} href="../../views/registro">Registrarse</Link>
                </div>
            </main>
        </div>
        <Footer></Footer>
        </>
    );
}