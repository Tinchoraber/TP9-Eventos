"use client";
import { useState, useEffect } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import styles from './detalleEvento.module.css';
import { useRouter, useParams } from 'next/navigation';
export default function DetalleEvento() {
  const router = useRouter();
  const { id } = useParams(); // Obtener el ID del evento desde la URL
  const [evento, setEvento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvento = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/event/${id}`); // Llamada a la API usando el ID
        if (!response.ok) {
          throw new Error('Error al obtener el evento');
        }
        const data = await response.json();
        setEvento(data); // Guardar los detalles del evento en el estado
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
        <h1 className={styles.titulo}>{evento.titulo}</h1>
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
