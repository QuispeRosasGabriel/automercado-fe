"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const HeroFilter = () => {
  const router = useRouter();

  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const filters = [
    {
      label: "Marca",
      options: [
        "Todos",
        "Audi",
        "Bentley",
        "BMW",
        "Ford",
        "Honda",
        "Mercedes",
      ],
    },
    {
      label: "Modelos",
      options: ["Todos", "A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Precios",
      options: [
        "Todos",
        // "No max Price",
        "$2,000",
        "$5,000",
        "$10,000",
        "$15,000",
        "$6,000",
      ],
    },
  ];

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
  };

  return (
    <div className="col-lg-12">
      <ul className="nav nav-pills justify-content-center">
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${
              selectedStatus === "All Status" && "active"
            }`}
            onClick={() => handleStatusClick("All Status")}
          >
            Todos los vehiculos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "Used Cars" && "active"}`}
            onClick={() => handleStatusClick("Used Cars")}
          >
            Semi-nuevos
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className={`nav-link ${selectedStatus === "New Cars" && "active"}`}
            onClick={() => handleStatusClick("New Cars")}
          >
            Nuevos
          </button>
        </li>
      </ul>

      {/* filter tabs */}
      <div className="adss_bg_stylehome1">
        <div className="home1_advance_search_wrapper">
          <ul className="mb0 text-center">
            {filters
              .filter((filter) => filter.label !== selectedStatus)
              .map((filter) => (
                <li className="list-inline-item" key={filter.label}>
                  <div className="select-boxes">
                    <div className="car_brand">
                      <h6 className="title">{filter.label}</h6>
                      <select className="form-select">
                        {filter.options.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </li>
              ))}

            {/* Search button */}
            <li className="list-inline-item">
              <div className="d-block">
                <button
                  onClick={() => router.push("/todos-los-vehiculos")}
                  className="btn btn-thm advnc_search_form_btn"
                >
                  <span className="flaticon-magnifiying-glass" />
                  Buscar
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeroFilter;
