'use client';

import useSWR from 'swr';

type Producto = {
  id: string;
  nombre: string;
  precio: string;
  imagen: string; // Aquí guardas el enlace directo a la imagen
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR<Producto[]>(
    'https://api.sheetbest.com/sheets/b83148d0-46cc-42f8-8739-9e6cc479a47f',
    fetcher
  );

  if (error) return <p>Error cargando productos.</p>;
  if (!data) return <p>Cargando...</p>;

  return (
    <main className="catalogo-container">
      <h1 className="titulo">Catálogo</h1>
      <div className="grid-catalogo">
        {data.map((item) => (
          <div key={item.id} className="producto">
            <img
              src={item.imagen}  // Usa directamente la URL desde la hoja
              alt={item.nombre}
              className="producto-img"
            />
            <h2 className="nombre">{item.nombre}</h2>
            <p className="precio">{item.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
