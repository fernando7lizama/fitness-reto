export default function MedalCard({ title, earned }) {
  return (
    <div className={`p-4 rounded shadow-md text-center ${earned ? "bg-yellow-400" : "bg-gray-300"}`}>
      <p className="font-semibold">{title}</p>
      {earned ? "Medalla ganada 🏅" : "No ganada"}
    </div>
  );
}
