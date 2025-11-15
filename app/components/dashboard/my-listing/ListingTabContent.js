"use client";
import axiosClient from "@/utils/axiosClient";
import Pagination from "../../common/Pagination";
import ListingContent from "./ListingContent";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ListGridFilter from "../../listing/ListGridFilter";

const ListingTabContent = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalCount: 0,
  });

  const [filters, setFilters] = useState({
    status: "",
    search: "",
    page: 1,
    pageSize: 25,
    sortBy: "recent",
  });

  const getUserVehicles = async (params = filters) => {
    const user = JSON.parse(localStorage.getItem("user"));
    setLoading(true);
    if (!user) {
      toast.error("No hay usuario autenticado");
      setLoading(false);
      return;
    }
    try {
      const { data } = await axiosClient.get(
        `http://localhost:5002/api/vehicles/user/${user.id}`,
        { params }
      );
      setVehicles(data?.vehicles || []);
      setPagination(data?.pagination || {});
    } catch (err) {
      console.error("Error al obtener vehículos:", err);
      toast.error("Error al obtener vehículos:", err);
    } finally {
      setLoading(false);
    }
  };

  const getInstaVehicleFiltered = (filterUpdated) => {
    const updated = { ...filters, ...filterUpdated };
    setFilters(updated);
    getUserVehicles(updated);
  };

  useEffect(() => {
    getUserVehicles();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const updated = { ...filters, search: e.target.search.value };
    setFilters(updated);
    getUserVehicles({ search: e.target.search.value, page: 1 });
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="nav nav-tabs justify-content-start">
            <button
              className="nav-link"
              onClick={() => getInstaVehicleFiltered({ status: "" })}
            >
              Todos
            </button>

            <button
              className="nav-link"
              onClick={() => getInstaVehicleFiltered({ status: "Nuevo" })}
            >
              Nuevos
            </button>

            <button
              className="nav-link"
              onClick={() => getInstaVehicleFiltered({ status: "Seminuevo" })}
            >
              Semi-nuevos
            </button>

            <button
              className="nav-link"
              onClick={() => getInstaVehicleFiltered({ status: "Usado" })}
            >
              Usados
            </button>
          </div>
        </div>

        <div className="col-lg-12 mt50">
          <form className="footer_mailchimp_form" onSubmit={handleSearchSubmit}>
            <div className="wrapper">
              <div
                className="col-auto"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "12px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  backgroundColor: "#fff",
                }}
              >
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="Buscar por marca o modelo..."
                  style={{
                    border: "none",
                    outline: "none",
                    flex: 1,
                    backgroundColor: "transparent",
                  }}
                />
                <button type="submit">ok</button>
              </div>
            </div>
          </form>
          <ListGridFilter onSortChange={getInstaVehicleFiltered} />

          <div className="row">
            <div
              className="fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              {loading ? (
                <p>Cargando vehículos...</p>
              ) : vehicles.length > 0 ? (
                <ListingContent vehicles={vehicles} setVehicles={setVehicles} />
              ) : (
                <p>No se encontraron vehículos.</p>
              )}
            </div>
          </div>

          <div className="mbp_pagination mt10">
            <Pagination
              currentPage={pagination.page}
              totalPages={pagination.totalPages}
              onPageChange={getInstaVehicleFiltered}
            />
          </div>
          {/* Pagination */}
        </div>
      </div>
    </>
  );
};

export default ListingTabContent;
