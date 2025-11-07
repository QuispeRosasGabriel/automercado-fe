"use client";

import DashboardHeader from "@/app/components/common/DashboardHeader";
import DashboardHeaderTop from "@/app/components/common/DashboardHeaderTop";
import DashboardSidebarMenu from "@/app/components/common/DashboardSidebarMenu";
import DashboardSidebarMobileMenu from "@/app/components/common/DashboardSidebarMobileMenu";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import Additional from "@/app/components/dashboard/add-listing/Additional";
import CarFeatures from "@/app/components/dashboard/add-listing/CarFeatures";
import LocationInfo from "@/app/components/dashboard/add-listing/LocationInfo";
import Gallery from "@/app/components/dashboard/add-listing/Gallery";
import { useState } from "react";
import axiosClient from "@/utils/axiosClient";
import { toast } from "react-toastify";

/* export const metadata = {
  title: "Vende tu vehículo || Automercado.pe",
}; */

const AddListings = () => {
  const [vehicleData, setVehicleData] = useState({
    userId: "",
    km: null,
    color: "",
    brand: "",
    model: "",
    year: null,
    type: "",
    lastMaintenanceDate: "",
    nextMaintenanceDate: "",
    price: null,
    verified: false,
    description: "",
    transmission: "",
    status: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVehicleData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userId = "690a6fdb4cdd70f356f748b0";
      const payload = { ...vehicleData, userId };

      const { data, response } = await axiosClient.post(
        "/vehicles/create-vehicle",
        payload
      );

      if (!data) {
        toast.error(
          response.data.message || "Error al enviar el enlace de reinicio."
        );
        return;
      }
      toast.success("Vehículo publicado exitosamente");
    } catch (err) {
      toast.error(`Error al crear vehículo: ${err.response?.data?.message}`);
    }
  };

  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <DashboardHeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DashboardHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Our Dashbord */}
      <section className="our-dashbord dashbord bgc-f9">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xxl-10 offset-xxl-2 dashboard_grid_space">
              <div className="row">
                <div className="col-lg-12">
                  <div className="extra-dashboard-menu dn-lg">
                    <div className="ed_menu_list">
                      <ul>
                        <DashboardSidebarMenu />
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* End .row */}

              <div className="dashboard_navigationbar dn db-lg mt50">
                <DashboardSidebarMobileMenu />
              </div>

              <div className="row">
                <div className="col-xl-8">
                  <div className="breadcrumb_content mb50">
                    <h2 className="breadcrumb_title">Vende tu vehículo</h2>
                    <p>
                      Completa los siguientes campos para publicar tu anuncio
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}
              <form onSubmit={handleSubmit} className="row">
                {/* Información adicional */}
                <div className="col-lg-12">
                  <div className="new_property_form">
                    {/* <h4 className="title mb30">Additional</h4> */}
                    <Additional
                      handleChange={handleChange}
                      vehicleData={vehicleData}
                    />
                  </div>
                </div>
                {/* End col-12 Additional */}

                {/* Características del vehículo */}
                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">
                          Selecciona las características de tu coche
                        </h4>
                      </div>
                      <CarFeatures
                        handleChange={handleChange}
                        vehicleData={vehicleData}
                      />
                    </div>
                  </div>
                </div>
                {/* End col-12 CarFeatures */}

                {/* Galería */}
                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Galería</h4>
                      </div>

                      <div className="col-lg-12">
                        <label className="form-label">Imagen destacada</label>
                        <Gallery
                          handleChange={handleChange}
                          vehicleData={vehicleData}
                        />
                      </div>

                      <div className="col-md-12">
                        <div className="mb20">
                          <label className="form-label">
                            Vídeo - copia el enlace de cualquier vídeo en línea,
                            por ejemplo: YouTube, Facebook, Instagram o formato
                            .mp4
                          </label>
                          <input
                            name="form_name"
                            className="form-control form_control"
                            type="text"
                            placeholder="Enlace del vídeo"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End col-12 gallery */}

                {/* Ubicación */}
                <div className="col-lg-12">
                  <div className="new_property_form">
                    <div className="row">
                      <div className="col-lg-12">
                        <h4 className="title mb30">Ubicación</h4>
                      </div>
                      <LocationInfo
                        handleChange={handleChange}
                        vehicleData={vehicleData}
                      />
                    </div>
                  </div>
                </div>
                {/* End col-12 loction info */}
                <div className="text-end mt-4">
                  <button type="submit" className="btn btn-thm p20">
                    Publicar vehículo
                  </button>
                </div>
              </form>
              {/* End .row */}
            </div>
          </div>
        </div>
      </section>
      {/* End Our Dashbord */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default AddListings;
