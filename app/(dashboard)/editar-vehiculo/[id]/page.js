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
import { useEffect, useState } from "react";
import axiosClient from "@/utils/axiosClient";
import { toast } from "react-toastify";
import { useParams } from "next/navigation";

/* export const metadata = {
  title: "Vende tu vehículo || Automercado.pe",
}; */

const EditListings = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [errorFields, setErrorFields] = useState([]); // campos con error

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

  // Cargar datos del vehículo al montar el componente
  useEffect(() => {
    const fetchVehicle = async () => {
      if (!id) return;
      setLoading(true);
      try {
        const { data } = await axiosClient.get(
          `/vehicles/get-vehicle-by-id/${id}`
        );
        setVehicleData((prev) => ({
          ...prev,
          ...data.vehicle,
        }));
      } catch (err) {
        console.error("Error al obtener vehículo:", err);
        toast.error("No se pudo cargar el vehículo.");
      } finally {
        setLoading(false);
      }
    };
    fetchVehicle();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setVehicleData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrorFields((prev) => prev.filter((field) => field !== name));
    console.log("errors", errorFields);
  };

  // Validaciones antes de enviar

  const validateFields = () => {
    const requiredFields = [
      { field: "brand", label: "Marca" },
      { field: "model", label: "Modelo" },
      { field: "price", label: "Precio" },
      { field: "year", label: "Año" },
      { field: "type", label: "Tipo" },
      { field: "color", label: "Color" },
      { field: "status", label: "Estado" },
      { field: "fuelType", label: "Tipo de combustible" },
      { field: "transmission", label: "Transmisión" },
      { field: "description", label: "Descripción" },
      { field: "km", label: "Kilometraje" },
    ];

    const errors = [];
    const fieldsWithError = [];

    // Validar campos vacíos
    for (let { field, label } of requiredFields) {
      const value = vehicleData[field];
      if (!value || value.toString().trim() === "") {
        errors.push(`• ${label} es obligatorio.`);
        fieldsWithError.push(field);
      }
    }

    // Validaciones numéricas
    if (
      isNaN(vehicleData.year) ||
      vehicleData.year < 1900 ||
      vehicleData.year > 2099
    ) {
      errors.push(
        "• El año ingresado no es válido (debe ser entre 1900 y 2099)."
      );
      fieldsWithError.push("year");
    }
    if (isNaN(vehicleData.price) || vehicleData.price <= 0) {
      errors.push("• El precio debe ser un número mayor que 0.");
      fieldsWithError.push("price");
    }

    // Guardar campos con error
    setErrorFields(fieldsWithError);

    // Si hay errores, los mostramos todos en un solo toast
    if (errors.length > 0) {
      toast.error(errors.join("\n"), {
        style: { whiteSpace: "pre-line" }, // permite saltos de línea
      });
      return false;
    }
    // Sin errores
    setErrorFields([]);
    return true;
  };

  // Actualizar vehículo (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!id) {
      toast.error("ID del vehículo no encontrado.");
      return;
    }

    // Si falla la validación, no continúa
    if (!validateFields()) return;

    try {
      setLoading(true);
      // hacemos la petición PUT en lugar de POST
      const { data } = await axiosClient.put(
        `/vehicles/update-vehicle/${id}`,
        vehicleData
      );

      toast.success("Vehículo editado exitosamente");
      console.log("Vehículo actualizado:", data.vehicle);
    } catch (err) {
      console.error("Error al editar vehículo:", err);
      toast.error(`Error al editar vehículo: ${err.response?.data?.message}`);
    } finally {
      setLoading(false);
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
                    <h2 className="breadcrumb_title">
                      {loading ? "Cargando..." : "Editar vehículo"}
                    </h2>
                    <p>
                      Completa los siguientes campos para editar tu vehículo
                    </p>
                  </div>
                </div>
              </div>
              {/* End .row */}
              <form onSubmit={handleSubmit} className="row" noValidate>
                {/* Información adicional */}
                <div className="col-lg-12">
                  <div className="new_property_form">
                    {/* <h4 className="title mb30">Additional</h4> */}
                    <Additional
                      handleChange={handleChange}
                      vehicleData={vehicleData}
                      errorFields={errorFields}
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
                    Editar vehículo
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

export default EditListings;
