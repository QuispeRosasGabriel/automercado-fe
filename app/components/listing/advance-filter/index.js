import AdvanceMainFilter from "./AdvanceMainFilter";
import CheckBoxFilter from "./CheckBoxFilter";
import MainFilter from "./MainFilter";
import PriceRange from "./PriceRange";

const AdvanceFilter = ({ filters, setFilters, onSearch }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value === "Todos" ? "" : value, // "Todos" limpia el filtro
    }));
  };

  return (
    <>
      <div className="row">
        <MainFilter filters={filters} handleChange={handleChange} />

        <div className="col col-sm-4 col-lg-2">
          <div className="advance_search_style">
            <a
              className="advance_dd_btn d-inline-flex"
              href="#collapseAdvanceSearch"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded={false}
              aria-controls="collapseAdvanceSearch"
            >
              <span className="flaticon-cogwheel" /> Mas Filtros
            </a>
          </div>
        </div>
        {/* End .col */}

        <div className="col col-sm-4 col-lg-2">
          <div className="advance_search_style">
            <button
              type="button"
              className="btn search_btn btn-thm"
              onClick={onSearch}
            >
              <span className="flaticon-magnifiying-glass" /> Buscar
            </button>
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="collapse" id="collapseAdvanceSearch">
        <div className="row bgc-thm2">
          <AdvanceMainFilter filters={filters} handleChange={handleChange} />
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-sm-6 col-md-4 col-lg-3">
            <div className="advance_search_style">
              <div className="uilayout_range">
                <h6 className="ass_price_title text-white text-start">Price</h6>
                <PriceRange filters={filters} setFilters={setFilters} />
              </div>
            </div>
          </div>
          {/* End .col */}

          {/* <div className="col-sm-6 col-md-4 col-lg-6 ">
            <h6 className="font-600 ass_price_title text-white text-start mb-3">
              Adicionales
            </h6>
            <CheckBoxFilter />
          </div> */}
          {/* End .col */}
        </div>
      </div>
    </>
  );
};

export default AdvanceFilter;
