"use client";
import React, { useState } from "react";

const Additional = ({ handleChange, vehicleData }) => {
  const formFields = [
    /* {
      label: "Titulo",
      name: "form_name",
      type: "text",
      placeholder: "Titulo",
    }, */
    // {
    //   label: "Type",
    //   name: "type",
    //   type: "select",
    //   options: ["Active", "Pending", "Approved", "Others"],
    // },
    {
      label: "Marca",
      name: "brand",
      type: "select",
      options: ["Audi", "Bentley", "BMW", "Ford", "Honda", "Mercedes"],
    },
    {
      label: "Modelo",
      name: "model",
      type: "select",
      options: ["A3 Sportback", "A4", "A6", "Q5"],
    },
    {
      label: "Año",
      name: "year",
      type: "select",
      options: [
        // "Year",
        "1967",
        "1990",
        "2000",
        "2002",
        "2005",
        "2010",
        "2015",
        "2020",
      ],
    },
    {
      label: "Estado",
      name: "status",
      type: "select",
      options: ["Nuevo", "Seminuevo", "Usado"],
    },
    {
      label: "Tipo",
      name: "type",
      type: "select",
      options: [
        "SUV",
        "Sedan",
        "Pickup",
        "Hatchback",
        "Coupe",
        "Van",
        "Motorcycle",
        "Convertible",
      ],
    },
    {
      label: "Transmision",
      name: "transmission",
      type: "select",
      options: ["Automatico", "Manual"],
    },
    {
      label: "Combustible",
      name: "fuelType",
      type: "select",
      options: [
        "Gasolina",
        "Diesel",
        "Electrico",
        "Hibrido",
        "Gas Natural",
        "GLP",
      ],
    },
    {
      label: "Cilindros",
      name: "cylinders",
      type: "select",
      options: ["1", "2", "4", "6", "8"],
    },
    {
      label: "Color",
      name: "color",
      type: "select",
      options: ["Negro", "Beige", "Marron", "Rojo"],
    },
    // {
    //   label: "Doors",
    //   name: "doors",
    //   type: "select",
    //   options: ["Doors", "2 Doors", "3 Doors", "4 Doors", "5 Doors"],
    // },
    {
      label: "Precio (USD)",
      name: "price",
      type: "number",
      placeholder: "0",
    },
    {
      label: "Kilometraje",
      name: "km",
      type: "number",
      placeholder: "0",
    },
    // {
    //   label: "Engine Size",
    //   name: "engine_size",
    //   type: "text",
    //   placeholder: "Select",
    // },
    // { label: "VIN", name: "vin", type: "text", placeholder: "Select" },
    {
      label: "Descripcion",
      name: "description",
      type: "textarea",
      placeholder: "Descripcion",
    },
  ];

  const renderFormField = (field) => {
    if (field.type === "select") {
      return (
        <div className="col-sm-6 col-md-4" key={field.name}>
          <div className="ui_kit_select_search add_new_property mb20">
            <label className="form-label">{field.label}</label>
            <select
              className="form-select"
              name={field.name}
              value={vehicleData[field.name]}
              onChange={handleChange}
            >
              <option value="">Seleccionar</option>
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      );
    } else if (field.type === "text") {
      return (
        <div className="col-sm-6 col-md-4" key={field.name}>
          <div className="mb20">
            <label className="form-label">{field.label}</label>
            <input
              name={field.name}
              className="form-control form_control"
              type="text"
              placeholder={field.placeholder}
              value={vehicleData[field.name]}
              onChange={handleChange}
            />
          </div>
        </div>
      );
    } else if (field.type === "number") {
      return (
        <div className="col-sm-6 col-md-4" key={field.name}>
          <div className="mb20">
            <label className="form-label">{field.label}</label>
            <input
              name={field.name}
              className={`form-control form_control ${
                vehicleData[field.name] ?? ""
              }`}
              type="number"
              placeholder={field.placeholder}
              value={vehicleData[field.name]}
              onChange={handleChange}
            />
          </div>
        </div>
      );
    } else if (field.type === "textarea") {
      return (
        <div className="col-md-12" key={field.name}>
          <div className="mb20">
            <label className="form-label">{field.label}</label>
            <textarea
              name={field.name}
              className="form-control"
              rows={10}
              placeholder={field.placeholder}
              value={vehicleData[field.name]}
              onChange={handleChange}
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="row">
      {formFields.map((field) => renderFormField(field))}
    </div>
  );
};

export default Additional;
