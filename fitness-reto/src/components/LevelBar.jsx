export default function LevelBar({ level, xp, nextLevelXp }) {
  const pct = Math.min((xp / nextLevelXp) * 100, 100);
  return (
    <div className="my-4 w-full bg-gray-300 rounded h-6 relative">
      <div
        className="bg-green-500 h-6 rounded"
        style={{ width: `${pct}%` }}
      />
      <p className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
        Nivel {level} — {xp}/{nextLevelXp} XP
      </p>
    </div>
  );
}
