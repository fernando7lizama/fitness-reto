export default function MedalBar({ xp }) {
  // escalones (podrás cambiarlos cuando quieras)
  const niveles = [
    { nombre: "Bronce",   hasta: 100 },
    { nombre: "Plata",    hasta: 500 },
    { nombre: "Oro",      hasta: 1000 },
    { nombre: "Platino",  hasta: 5000 },
  ];

  // averiguamos nivel actual y cuánto falta
  const actual = niveles.find(({ hasta }) => xp < hasta) ?? niveles.at(-1);
  const prevLim = niveles[niveles.indexOf(actual) - 1]?.hasta ?? 0;
  const progreso = ((xp - prevLim) / (actual.hasta - prevLim)) * 100;

  return (
    <div className="my-4">
      {/* medalla + texto */}
      <div className="flex items-center mb-1">
        <span className="mr-2 text-2xl">
          {actual.nombre === "Bronce"   && "🥉"}
          {actual.nombre === "Plata"    && "🥈"}
          {actual.nombre === "Oro"      && "🥇"}
          {actual.nombre === "Platino"  && "🏆"}
        </span>
        <span className="font-semibold">{actual.nombre}</span>
        <span className="ml-auto text-sm text-gray-600">
          {xp}/{actual.hasta} XP
        </span>
      </div>

      {/* barra */}
      <div className="h-3 bg-gray-200 rounded">
        <div
          style={{ width: `${Math.min(progreso, 100)}%` }}
          className="h-full bg-yellow-400 rounded"
        />
      </div>
    </div>
  );
}
