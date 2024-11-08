"use client";
import { useState, useEffect } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import styles from './detalleEvento.module.css';
import { useRouter, useSearchParams } from 'next/navigation';

export default function DetalleEvento() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get('id');
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/event/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener el evento');
        }
        const data = await response.json();
        setEvento(data); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchEvento();
    }
  }, [id]);

  if (loading) {
    return <p>Cargando detalles del evento...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!evento) {
    return <p>No se encontró el evento</p>;
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.titulo}>{evento.name}</h1>
        <div className={styles.imagenContainer}>
          <img src={evento.imagen} alt={evento.name} className={styles.imagen} />
        </div>
        <div className={styles.eventoInfo}>
          <p className={styles.eventoFecha}>Fecha: {new Date(evento.start_date).toLocaleDateString()}</p>
          <p className={styles.eventoDuracion}>Duración: {evento.duration_in_minutes} minutos</p>
          <p className={styles.eventoUbicacion}>Ubicación: {evento.event_location.name}, {evento.event_location.full_address}</p>
          <p className={styles.descripcion}>Descripción: {evento.description}</p>
          <p className={styles.detalles}>Precio: ${evento.price}</p>
          <p className={styles.asistencia}>Máxima asistencia: {evento.max_assistance}</p>
        </div>
        <div className={styles.tags}>
          <p>Etiquetas:</p>
          <ul>
            {evento.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>
        <button className={styles.volver} onClick={() => router.back()}>Volver</button>
      </div>
      <Footer />
    </>
  );
}
