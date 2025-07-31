import React from "react";

interface Zapatilla {
  nombre: string;
  precio: number;
  imagen: string;
  descripcion: string;
}

const zapatillas: Zapatilla[] = [
  {
    nombre: "Nike Air Force 1",
    precio: 120,
    imagen: "/zapas/nikeairforce1.jpg",
    descripcion: "Clásicas, cómodas y siempre en tendencia.",
  },
  {
    nombre: "Adidas Campus 00s",
    precio: 100,
    imagen: "/zapas/nikeairforce1.jpg",
    descripcion: "La nueva silueta urbana que está arrasando.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">Catálogo de Zapatillas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {zapatillas.map((zapa, index) => (
          <div key={index} className="border rounded-xl p-4 shadow hover:shadow-lg">
            <img src={zapa.imagen} alt={zapa.nombre} className="rounded mb-3" />
            <h2 className="text-xl font-semibold">{zapa.nombre}</h2>
            <p className="text-sm mb-2 text-gray-500">{zapa.descripcion}</p>
            <p className="font-bold text-lg mb-2">{zapa.precio} €</p>
            <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition">Comprar</button>
          </div>
        ))}
      </div>
    </main>
  );
}
