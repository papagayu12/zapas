// app/page.tsx
export default function Home() {
  const zapatillas = [
    {
      id: 1,
      nombre: "Nike Air Force 1",
      precio: "129,99 €",
      imagen: "/zapas/nikeairforce1.jpg",
    },
    {
      id: 2,
      nombre: "Adidas Superstar",
      precio: "89,99 €",
      imagen: "/zapas/adidassuperstar.jpg",
    },
    {
      id: 3,
      nombre: "New Balance 574",
      precio: "99,99 €",
      imagen: "/zapas/nb574.jpg",
    },
    {
      id: 4,
      nombre: "Puma Suede",
      precio: "79,99 €",
      imagen: "/zapas/pumasuede.jpg",
    },
    {
      id: 5,
      nombre: "Puma Suede",
      precio: "79,99 €",
      imagen: "/zapas/pumasuede.jpg",
    },
  ];

  return (
    <main className="catalogo-container">
      <h1 className="titulo">Catálogo</h1>

      <div className="grid-catalogo">
        {zapatillas.map((zapa) => (
          <div key={zapa.id} className="producto">
            <img src={zapa.imagen} alt={zapa.nombre} />
            <h2 className="nombre">{zapa.nombre}</h2>
            <p className="precio">{zapa.precio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
