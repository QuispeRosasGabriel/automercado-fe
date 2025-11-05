const filterOptions = [
  {
    label: "Ano",
    options: ["1967", "1990", "2000", "2002", "2005", "2010", "2015", "2020"],
    type: "select",
  },
  {
    label: "Combustible",
    options: ["Diesel", "Electric", "Hybrid", "Petrol"],
    type: "select",
  },
  {
    label: "Transmision",
    options: ["Autometic", "Manual", "Semi-Autometic"],
    type: "select",
  },
  // {
  //   label: "Numero De Puertas",
  //   options: ["2 Doors", "3 Doors", "4 Doors", "5 Doors"],
  //   type: "select",
  // },
  // {
  //   label: "Color Interior",
  //   options: ["Black", "Beige", "Brown", "Red"],
  //   type: "select",
  // },
  // {
  //   label: "Exterior Color",
  //   options: ["Black", "Beige", "Brown", "Red"],
  //   type: "select",
  // },
  {
    label: "Cilindros",
    options: ["1", "2", "4", "6", "8"],
    type: "select",
  },
  // {
  //   label: "Listing Status",
  //   options: ["Active", "Pending", "Disable"],
  //   type: "select",
  // },
  {
    label: "Kilometraje Min.",
    placeholder: "Kilometraje Min",
    type: "input",
    inputType: "number",
  },
  {
    label: "Kilometraje Max.",
    placeholder: "Kilometraje Max",
    type: "input",
    inputType: "number",
  },
  // {
  //   label: "VIN number",
  //   placeholder: "VIN number",
  //   type: "input",
  //   inputType: "number",
  // },
];

const AdvanceMainFilter = () => {
  return (
    <>
      {filterOptions.map((option, index) => (
        <div className="col-12 col-sm-4 col-lg-2" key={index}>
          <div className="advance_search_style">
            {option.type === "select" ? (
              <select className="form-select show-tick">
                <option>{option.label}</option>
                {option.options.map((opt, i) => (
                  <option key={i}>{opt}</option>
                ))}
              </select>
            ) : (
              <input
                className="form-control form_control"
                type={option.inputType}
                placeholder={option.placeholder}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AdvanceMainFilter;
