import React from "react";

export default function Medallas({ medals }) {
  return (
    <div className="p-4 mt-8">
      <h2 className="text-xl font-bold mb-4">Tus Medallas</h2>
      <p>Medallas de Flexiones: <span className="font-semibold">{medals.flexiones}</span></p>
    </div>
  );
}
