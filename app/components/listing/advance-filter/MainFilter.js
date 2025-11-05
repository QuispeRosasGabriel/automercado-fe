const MainFilter = () => {
  const filterOptions = [
    {
      label: "Estado",
      values: ["Nuevo", "Usado", "Todos"],
    },
    {
      label: "Marca",
      values: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes"],
    },
    {
      label: "Modelo",
      values: ["A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Tipo",
      values: ["Convertible", "Coupe", "Hatchback", "Sedan", "SUV"],
    },
  ];

  return (
    <>
      {filterOptions.map((option, index) => (
        <div key={index} className="col-12 col-sm-4 col-lg-2">
          <div className="advance_search_style">
            <select className="form-select show-tick">
              <option>{option.label}</option>
              {option.values.map((value, valueIndex) => (
                <option key={valueIndex}>{value}</option>
              ))}
            </select>
          </div>
        </div>
      ))}
    </>
  );
};

export default MainFilter;
