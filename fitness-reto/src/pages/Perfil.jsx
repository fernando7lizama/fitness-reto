import React from "react";

export default function Perfil({ user, medallas, onLogout }) {
  return (
    <div className="p-4 mt-8 flex flex-col items-center">
      {user.avatar ? (
        <img src={user.avatar} alt="avatar" className="w-24 h-24 rounded-full mb-4" />
      ) : (
        <div className="w-24 h-24 rounded-full bg-gray-300 mb-4 flex justify-center items-center text-4xl text-gray-600">
          {user.name.charAt(0)}
        </div>
      )}
      <h2 className="text-xl font-bold mb-2">{user.name}</h2>
      <p className="mb-4">Medallas de flexiones: {medallas.flexiones}</p>
      <button
        onClick={onLogout}
        className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700"
      >
        Cerrar Sesión
      </button>
    </div>
  );
}
