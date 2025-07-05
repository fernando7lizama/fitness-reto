import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/retos", label: "Retos" },
    { to: "/medallas", label: "Medallas" },
    { to: "/ranking", label: "Ranking" },
    { to: "/perfil", label: "Perfil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-300 flex justify-around py-2 max-w-[420px] w-full mx-auto z-50">
      {links.map(({ to, label }) => (
        <Link
          key={to}
          to={to}
          className={`text-gray-700 font-medium ${
            location.pathname === to ? "text-blue-600" : ""
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
