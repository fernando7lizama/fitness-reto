import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import NavBar      from "./components/NavBar";
import Home        from "./pages/Home";
import Retos       from "./pages/Retos";        // flexiones
import Sentadillas from "./pages/Sentadillas";  // NUEVO
import Medallas    from "./pages/Medallas";
import Ranking     from "./pages/Ranking";
import Perfil      from "./pages/Perfil";

export default function App() {
  /* ---------- estado global ---------- */
  const [xp, setXp] = useState(0);
  const [medallas, setMedallas] = useState({
    flexiones: 0,
    sentadillas: 0,
  });
  const [user, setUser] = useState({
    name: "Manuel Fernando Lizama Hernández",
    avatar: "",
  });

  /* ---------- constantes ---------- */
  const XP_POR_REP         = 10;  // 10 XP por repetición
  const REPS_POR_MEDALLA   = 10;  // 1 medalla cada 10 reps

  /* ---------- sumar XP + medallas ---------- */
  const handleRetoFinalizado = (reps, tipo) => {
    // acumula XP
    setXp(prev => prev + reps * XP_POR_REP);

    // calcula medallas por tipo
    const nuevas = Math.floor(reps / REPS_POR_MEDALLA);
    if (nuevas) {
      setMedallas(m => ({
        ...m,
        [tipo]: m[tipo] + nuevas,
      }));
    }
  };

  /* ---------- logout ---------- */
  const handleLogout = () => {
    setUser(null);
    setXp(0);
    setMedallas({ flexiones: 0, sentadillas: 0 });
  };

  /* ---------- login simulado ---------- */
  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Por favor, inicia sesión para continuar.</p>
      </div>
    );
  }

  /* ---------- rutas ---------- */
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/"          element={<Home />} />

        {/* Flexiones */}
        <Route
          path="/retos"
          element={
            <Retos
              onRetoFinalizado={(reps) => handleRetoFinalizado(reps, "flexiones")}
            />
          }
        />

        {/* Sentadillas */}
        <Route
          path="/sentadillas"
          element={
            <Sentadillas
              onFinish={(reps) => handleRetoFinalizado(reps, "sentadillas")}
            />
          }
        />

        <Route path="/medallas"  element={<Medallas medals={medallas} />} />
        <Route path="/ranking"   element={<Ranking />} />
        <Route
          path="/perfil"
          element={<Perfil user={user} medallas={medallas} onLogout={handleLogout} />}
        />
      </Routes>
    </>
  );
}
