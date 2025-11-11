const MainFilter = ({ filters, handleChange }) => {
  const filterOptions = [
    {
      name: "status",
      label: "Estado",
      value: ["Nuevo", "Seminuevo", "Usado"],
    },
    {
      name: "brand",
      label: "Marca",
      value: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes"],
    },
    {
      name: "model",
      label: "Modelo",
      value: ["A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      name: "type",
      label: "Tipo",
      value: ["Convertible", "Coupe", "Hatchback", "Sedan", "SUV"],
    },
  ];

  return (
    <>
      {filterOptions.map((option, index) => (
        <div key={index} className="col-12 col-sm-4 col-lg-2">
          <div className="advance_search_style">
            <select
              className="form-select show-tick"
              name={option.name}
              value={filters[option.name] || ""}
              onChange={handleChange}
            >
              <option value="">{option.label}</option>
              {option.value.map((value, valueIndex) => (
                <option key={valueIndex} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainFilter;
