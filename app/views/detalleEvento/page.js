"use client"
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import styles from './detalleEvento.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DetalleEvento() {
  const router = useRouter();

  // Información simulada de un evento
  const evento = {
    titulo: 'Concierto de Rock',
    fecha: '15 Septiembre 2024',
    ubicacion: 'Buenos Aires, Argentina',
    descripcion: 'Disfruta del mejor rock en vivo con bandas locales e internacionales.',
    detalles: 'Este concierto contará con bandas como Zafar, La Vela Puerca y Queen. ¡No te lo pierdas!',
    imagen: '/festivalCine.jpg',
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>{evento.titulo}</h1>
        <Image
          src={evento.imagen}
          alt={evento.titulo}
          width={800}
          height={400}
          className={styles.imagen}
        />
        <p className={styles.eventoFecha}>Fecha: {evento.fecha}</p>
        <p className={styles.eventoUbicacion}>Ubicación: {evento.ubicacion}</p>
        <p className={styles.descripcion}>{evento.descripcion}</p>
        <p className={styles.detalles}>{evento.detalles}</p>
        <button className={styles.volver} onClick={() => router.back()}>Volver</button>
      </div>
      <Footer />
    </>
  );
}
