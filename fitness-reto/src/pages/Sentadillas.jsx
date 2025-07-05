// src/pages/Sentadillas.jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sentadillas({ onFinish }) {
  const [cuenta, setCuenta]   = useState(0);
  const [escuchando, setEsc]  = useState(false);
  const [error, setError]     = useState("");
  const fase                  = useRef("up");
  const sonidoRef             = useRef(null);
  const nav                   = useNavigate();

  /* Cargar beep */
  useEffect(() => {
    sonidoRef.current = new Audio("/beep.mp3");
  }, []);

  /* Pedir permiso y empezar */
  const iniciar = async () => {
    /* Comprobaciones de compatibilidad */
    if (!("DeviceMotionEvent" in window)) {
      setError("Tu dispositivo no expone el sensor de movimiento.");
      return;
    }

    try {
      // iOS ≥ 13
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        const res = await DeviceMotionEvent.requestPermission();
        if (res !== "granted") {
          setError("Permiso denegado. Actívalo en Ajustes > Safari.");
          return;
        }
      }
      setEsc(true);
    } catch (e) {
      setError("No se pudo activar el sensor.");
    }
  };

  /* Listener */
  useEffect(() => {
    if (!escuchando) return;

    const handle = (e) => {
      const z = e.accelerationIncludingGravity?.z ?? 0;

      if (fase.current === "up" && z < -6) fase.current = "down";
      if (fase.current === "down" && z > 6) {
        fase.current = "up";
        setCuenta((c) => {
          sonidoRef.current?.play();
          return c + 1;
        });
      }
    };

    window.addEventListener("devicemotion", handle);
    return () => window.removeEventListener("devicemotion", handle);
  }, [escuchando]);

  /* Finalizar */
  const finalizar = () => {
    onFinish(cuenta);
    setCuenta(0);
    setEsc(false);
    nav("/");
  };

  /* UI */
  return (
    <div className="p-6 mt-8 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Reto: Sentadillas</h2>

      {error && (
        <p className="text-red-600 text-center mb-4 max-w-xs">
          {error}
        </p>
      )}

      {!escuchando ? (
        <button
          onClick={iniciar}
          className="bg-blue-600 text-white px-6 py-3 rounded-full"
        >
          Empezar
        </button>
      ) : (
        <>
          <div className="text-6xl font-bold my-6">{cuenta}</div>
          <button
            onClick={finalizar}
            className="bg-green-600 text-white px-6 py-3 rounded-full"
          >
            Finalizar Reto
          </button>
        </>
      )}
    </div>
  );
}
