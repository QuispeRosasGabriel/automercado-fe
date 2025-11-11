"use client";
import React from "react";

const Overview = ({ vehicle }) => {
  // ✅ Si no hay vehículo aún, no renderizamos nada
  if (!vehicle) return null;

  // 🔹 Estructura basada en los datos reales del backend
  const carDataFromAPI = [
    { label: "Marca", value: vehicle.brand || "—" },
    { label: "Modelo", value: vehicle.model || "—" },
    { label: "Color", value: vehicle.color || "—" },
    // 🔸 “Tracción” no está en el backend, así que lo dejamos comentado
    // { label: "Traccion", value: vehicle.driveType || "—" },
    { label: "Transmisión", value: vehicle.transmission || "—" },
    { label: "Estado", value: vehicle.status || "—" },
    { label: "Año", value: vehicle.year || "—" },
    {
      label: "Kilometraje",
      value: vehicle.km ? `${vehicle.km.toLocaleString()} km` : "—",
    },
    { label: "Tipo de Combustible", value: vehicle.fuelType || "—" },
    // 🔸 “Motor” no existe en el backend, así que lo dejamos comentado
    // { label: "Motor", value: vehicle.engine || "—" },
    // 🔸 Si en el futuro agregas más campos, puedes descomentar:
    // { label: "Doors", value: vehicle.doors },
    // { label: "Cylinders", value: vehicle.cylinders },
    // { label: "VIN", value: vehicle.vin },
  ];

  // 🔸 Código original (comentado para referencia)
  /*
  const carData = [
    { label: "Marca", value: "Volvo" },
    { label: "Modelo", value: "XC 90" },
    { label: "Color", value: "Blanco" },
    { label: "Traccion", value: "4x4" },
    { label: "Transmision", value: "Automatico" },
    { label: "Estado", value: "Usado" },
    { label: "Año", value: "2021" },
    { label: "Kilometraje", value: "280,000" },
    { label: "Tipo de Gasolina", value: "Diesel" },
    { label: "Motor", value: "5.2L" },
  ];
  */

  return (
    <ul className="list-group">
      {/* 🔹 Mapeamos los datos reales del vehículo */}
      {carDataFromAPI.map((item, index) => (
        <li
          className="list-group-item d-flex justify-content-between align-items-start"
          key={index}
        >
          <div className="me-auto">
            <div className="day">{item.label}</div>
          </div>
          <span className="schedule">{item.value}</span>
        </li>
      ))}
    </ul>
  );
};

export default Overview;
