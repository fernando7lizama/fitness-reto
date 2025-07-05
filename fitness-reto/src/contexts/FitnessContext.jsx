import { createContext, useState, useEffect } from "react";

export const FitnessContext = createContext();

export function FitnessProvider({ children }) {
  /* -------- sesión -------- */
  const [user, setUser] = useState(null);

  /* -------- XP y nivel -------- */
  const [xp, setXp] = useState(() => +localStorage.getItem("xp") || 0);
  const [level, setLevel] = useState(() => +localStorage.getItem("level") || 1);
  const nextLevelXp = 50 * level;

  /* -------- progreso por ejercicio -------- */
  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("progress");
    return saved ? JSON.parse(saved) : { Flexiones: 0 };
  });

  /* subir de nivel automáticamente */
  useEffect(() => {
    if (xp >= nextLevelXp) {
      setLevel((l) => l + 1);
      setXp((prev) => prev - nextLevelXp);
    }
  }, [xp, nextLevelXp]);

  /* guardar en localStorage */
  useEffect(() => {
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);
    localStorage.setItem("progress", JSON.stringify(progress));
  }, [xp, level, progress]);

  /* API global */
  const addRep = (ejercicio, cantidad = 1, xpPorRep = 5) => {
    setProgress((p) => ({
      ...p,
      [ejercicio]: (p[ejercicio] || 0) + cantidad,
    }));
    setXp((x) => x + xpPorRep * cantidad);
  };

  return (
    <FitnessContext.Provider
      value={{
        user,
        setUser,
        xp,
        level,
        nextLevelXp,
        progress,
        addRep,
      }}
    >
      {children}
    </FitnessContext.Provider>
  );
}
