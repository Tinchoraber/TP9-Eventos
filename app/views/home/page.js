'use client';
import { useState, useEffect } from 'react';
import Header from '@/app/components/header';
import styles from './home.module.css';
import Link from 'next/link';
import Footer from '@/app/components/footer';
import Image from 'next/image';
import { Darker_Grotesque } from 'next/font/google';

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/event'); 
        console.log(response)
        if (!response.ok) {
          throw new Error('Error al obtener los eventos');
        }
        const data = await response.json();
        console.log('data',data)
        setEventos(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEventos();
  }, []);

  if (loading) {
    return <p>Cargando eventos...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <Header />
      <div className={styles.padre}>
        <h1 className={styles.titulo}>Próximos Eventos</h1>
        <div className={styles.eventosContainer}>
          {eventos.length > 0 ? (
            eventos.map((evento) => (
              <div key={evento.id} className={styles.eventoCard}>
                <h2 className={styles.eventoTitulo}>{evento.name}</h2>
                <p className={styles.eventoDescripcion}>{evento.description}</p>
                <Link href={`/views/detalleEvento/${evento.id}`} className={styles.botonMasInfo}>
                  Más Información
                </Link>
              </div>
            ))
          ) : (
            <p>No hay eventos disponibles</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
