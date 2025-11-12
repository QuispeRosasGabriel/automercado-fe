const ListGridFilter = ({ onSortChange }) => {
  const options = [
    { label: "Relevancia", value: "relevance" },
    { label: "Menor precio", value: "price_asc" },
    { label: "Mayor precio", value: "price_desc" },
    { label: "Avisos recientes", value: "recent" },
    { label: "Año más reciente", value: "year_desc" },
    { label: "Menor kilometraje", value: "km_asc" },
  ];

  const handleSelectChange = (e) => {
    onSortChange({ sortBy: e.target.value, page: 1 });
  };

  return (
    <div className="listing_filter_row db-767">
      <div className="col-md-4">
        <div className="page_control_shorting left_area tac-sm mb30-767 mt15">
          <p>
            <span className="heading-color fw600">4733</span> Vehículos
            Disponibles
          </p>
        </div>
      </div>
      <div className="col-md-8">
        <div className="page_control_shorting right_area text-end tac-xsd">
          <ul>
            <li className="list-inline-item short_by_text listone">
              Ordenar Por:
            </li>
            <li className="list-inline-item listwo">
              <select
                className="form-select show-tick"
                onChange={handleSelectChange}
                defaultValue="recent"
              >
                {options.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ListGridFilter;
