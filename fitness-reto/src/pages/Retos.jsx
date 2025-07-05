import React from "react";
import { useNavigate } from "react-router-dom";

export default function Retos({ onRetoFinalizado }) {
  const navigate = useNavigate();

  const handleFinalizarReto = () => {
    const flexionesRealizadas = 15; // ejemplo valor
    onRetoFinalizado(flexionesRealizadas);
    navigate("/");
  };

  return (
    <div className="max-w-[420px] mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Página de Retos</h1>

      <button
        onClick={handleFinalizarReto}
        className="bg-green-500 text-white py-2 px-4 rounded mb-4 w-full"
      >
        Finalizar Reto
      </button>

      <button
        onClick={() => navigate("/sentadillas")}
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Ir a Sentadillas
      </button>
    </div>
  );
}
