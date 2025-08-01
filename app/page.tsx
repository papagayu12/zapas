'use client';

import useSWR from 'swr';

type Producto = {
  id: string;
  nombre: string;
  precio: string;
  imagen: string;
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
          <div
            key={item.id}
            className="producto bg-white shadow-md rounded-xl p-3 relative transition-transform hover:scale-105 text-center"
          >
            <span className="id-tag absolute top-2 left-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
              ID: {item.id}
            </span>
            <img
              src={item.imagen}
              alt={item.nombre}
              className="mx-auto mb-2 h-32 object-contain"
            />
            <h2 className="nombre">{item.nombre}</h2>
            <p className="precio">{item.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
