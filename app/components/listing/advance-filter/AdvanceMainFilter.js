const filterOptions = [
  {
    name: "year",
    label: "Año",
    value: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
    type: "select",
  },
  {
    name: "fuelType",
    label: "Combustible",
    value: ["Gasolina", "Diesel", "Electrico", "Hibrido", "Gas Natural", "GLP"],
    type: "select",
  },
  {
    name: "transmission",
    label: "Transmisión",
    value: ["Automatico", "Manual"],
    type: "select",
  },
  // {
  //   name: "doors",
  //   label: "Número De Puertas",
  //   value: ["2", "3", "4", "5"],
  //   type: "select",
  // },
  // {
  //   name: "interiorColor",
  //   label: "Color Interior",
  //   value: ["Negro", "Beige", "Marrón", "Rojo"],
  //   type: "select",
  // },
  // {
  //   name: "exteriorColor",
  //   label: "Color Exterior",
  //   value: ["Negro", "Blanco", "Gris", "Rojo"],
  //   type: "select",
  // },
  {
    name: "cylinders",
    label: "Cilindros",
    value: ["1", "2", "4", "6", "8"],
    type: "select",
  },
  {
    name: "minKm",
    label: "Kilometraje Min.",
    placeholder: "Kilometraje Min.",
    type: "input",
    inputType: "number",
  },
  {
    name: "maxKm",
    label: "Kilometraje Max.",
    placeholder: "Kilometraje Max.",
    type: "input",
    inputType: "number",
  },
  // {
  //   name: "vinNumber",
  //   label: "VIN number",
  //   placeholder: "VIN number",
  //   type: "input",
  //   inputType: "text",
  // },
];

const AdvanceMainFilter = ({ filters, handleChange }) => {
  return (
    <>
      {filterOptions.map((option, index) => (
        <div className="col-12 col-sm-4 col-lg-2" key={index}>
          <div className="advance_search_style">
            {option.type === "select" ? (
              <select
                className="form-select show-tick"
                name={option.name}
                value={filters[option.name] || ""}
                onChange={handleChange}
              >
                <option value="">{option.label}</option>
                {option.value.map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            ) : (
              <input
                className="form-control form_control"
                type={option.inputType}
                name={option.name}
                placeholder={option.placeholder}
                value={filters[option.name] || ""}
                onChange={handleChange}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdvanceMainFilter;
