import Header from '@/app/components/header';
import styles from './home.module.css';
import Link from 'next/link';
import Footer from '@/app/components/footer';
import Image from 'next/image';
export default function Eventos() {
  const eventos = [
    {
      id: 1,
      titulo: 'Concierto de Rock',
      descripcion: 'Disfruta del mejor rock en vivo con bandas locales e internacionales.',
      imagen: '/conciertoRock.jfif'
    },
    {
      id: 2,
      titulo: 'Feria del Libro',
      descripcion: 'Explora una amplia variedad de libros y participa en charlas con escritores.',
      imagen: '/feriaLibro.jpg'
    },
    {
      id: 3,
      titulo: 'Festival de Cine',
      descripcion: 'Un festival con las mejores películas de cine independiente.',
      imagen: '/festivalCine.jpg'
    },
  ];

  return (
    <>
    <Header></Header>
    <div className={styles.padre}>
      <h1 className={styles.titulo}>Próximos Eventos</h1>
      <div className={styles.eventosContainer}>
        {eventos.map((evento) => (
          <div key={evento.id} className={styles.eventoCard}>
            <Image
                src={evento.imagen}
                alt={evento.titulo}
                width={500}
                height={300}
                className={styles.eventoImagen}
              />
            <h2 className={styles.eventoTitulo}>{evento.titulo}</h2>
              <p className={styles.eventoDescripcion}>{evento.descripcion}</p>
            <Link href={`../../views/detalleEvento`} className={styles.botonMasInfo}>
              Más Información
            </Link>
          </div>
        ))}
      </div>
    </div>
    <Footer></Footer>
    </>
  );
}
