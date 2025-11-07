const Overview = () => {
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
    // { label: "Doors", value: "5" },
    // { label: "Cylinders", value: "10" },
    // { label: "VIN", value: "2D456THA798700213GT21" },
  ];

  return (
    <ul className="list-group">
      {carData.map((item, index) => (
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
