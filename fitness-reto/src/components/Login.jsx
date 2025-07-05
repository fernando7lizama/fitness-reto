import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setUser }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    if (name.trim()) {
      setUser(name.trim());
      navigate("/");          // redirige a Home
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen p-4">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow max-w-xs w-full space-y-4">
        <h1 className="text-2xl font-bold text-center">Iniciar sesión</h1>
        <input
          value={name}
          onChange={e=>setName(e.target.value)}
          placeholder="Tu nombre"
          className="border w-full px-3 py-2 rounded"
          required
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white w-full py-2 rounded">Entrar</button>
      </form>
    </div>
  );
}
