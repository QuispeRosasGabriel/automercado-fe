"use client";
import { useState } from "react";

const packages = [
  {
    title: "Gratis",
    monthlyPrice: 0.0,
    annualPrice: 199.89,
    features: ["10 Fotos en publicación"],
  },
  {
    title: "Basico",
    monthlyPrice: 30.0,
    annualPrice: 199.89,
    features: ["10 Fotos en publicación", "Video de tu vehículo"],
  },
  {
    title: "Intermedio",
    monthlyPrice: 50.0,
    annualPrice: 399.89,
    features: [
      "15 Fotos en publicación",
      "Video de tu vehículo",
      "Marca de Auto Verificado",
      "Anuncio en pagina principal"
    ],
  },
  {
    title: "Premium",
    monthlyPrice: 80.0,
    annualPrice: 499.89,
    features: [
      "Máxima visualización",
      "20 Fotos en publicación",
      "Video de tu vehículo",
      "Marca de Auto Verificado",
      "Anuncio en pagina principal",
      "Anuncio en Carrusel De Destacados",
    ],
    recommended: true,
  },
];

const PricingTable = () => {
  const [pricingType, setPricingType] = useState("monthly");

  const handleToggle = () => {
    setPricingType(pricingType === "monthly" ? "annual" : "monthly");
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="pricing_packages_top mb30">
            {/* <h5 className="save_title">Ahorra hasta 10%</h5> */}
            {/* <div className="toggle-btn">
              <span className="pricing_save1">Mensual</span>
              <label className="switch">
                <input type="checkbox" id="checbox" onClick={handleToggle} />
                <span className="pricing_table_switch_slide round" />
              </label>
              <span className="pricing_save2">Anual</span>
            </div> */}
            {/* End .toggle-btn */}
          </div>
        </div>
      </div>
      {/* End .row */}

      <div className="row">
        {packages.map((pkg) => (
          <div className="col-md-4 col-xl-3" key={pkg.title}>
            <div className="pricing_packages">
              <div className="heading">
                <h5 className="package_title">{pkg.title}</h5>
                <h2 className="text2">
                  {pricingType === "monthly"
                    ? `S/.${pkg.monthlyPrice}`
                    : `S/.${pkg.annualPrice}`}

                  {pricingType === "monthly" ? (
                    <>
                      <span> / {pkg.title === 'Gratis' ? 'Vigencia de 17 dias' : pkg.title !== 'Premium'  ? 'Vigencia de 65 dias' : 'Vigencia de 75 dias'}</span>
                    </>
                  ) : (
                    <>
                      <span> / Yearly</span>
                    </>
                  )}
                </h2>
                {pkg.recommended && <span className="recom">Recomendado</span>}
              </div>

              <div className="details">
                <ul className="list">
                  {pkg.features.map((feature, i) => (
                    <li key={i}>
                      <i className="fas fa-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#" className="btn package_btn">
                  Seleccionar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default PricingTable;
