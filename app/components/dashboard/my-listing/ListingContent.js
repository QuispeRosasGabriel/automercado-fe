"use client";
import axiosClient from "@/utils/axiosClient";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

const ListingContent = ({ vehicles, setVehicles }) => {
  const router = useRouter();

  const updateVehicle = (id, newState) => {
    setVehicles((prev) =>
      prev.map((v) =>
        v._id === id ? { ...v, state: newState, deletedAt: null } : v
      )
    );
  };
  const handleView = (id) => {
    router.push("/vehiculo/" + id);
  };

  const handleEdit = (id) => {
    router.push("/editar-vehiculo/" + id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await axiosClient.put(`/vehicles/delete/${id}`);
      toast.success("Vehículo eliminado");
      updateVehicle(id, "Eliminado");
    } catch (error) {
      console.error("Error eliminando vehículo:", error);
      toast.error("Error eliminando vehículo");
    }
  };

  const handleMarkSold = async (id) => {
    try {
      const res = await axiosClient.put(`/vehicles/mark-sold/${id}`);
      updateVehicle(id, "Vendido");
      toast.success("Vehículo marcado como Vendido");
    } catch (error) {
      console.error("Error marcando vendido:", error);
      toast.error("Error marcando como vendido");
    }
  };

  const handleRestore = async (id) => {
    try {
      const res = await axiosClient.put(`/vehicles/restore/${id}`);
      updateVehicle(id, "Publicado");
      toast.success("Vehículo publicado nuevamente");
    } catch (error) {
      console.error("Error restaurando vehículo:", error);
      toast.error("Error restaurando el vehículo");
    }
  };

  return (
    <div className="col-lg-12">
      <div className="table-responsive my_lisging_table">
        <table className="table">
          <thead className="table-light">
            <tr className="thead_row">
              <th className="thead_title pl20" scope="col">
                Marca
              </th>
              <th className="thead_title" scope="col">
                Modelo
              </th>
              <th className="thead_title" scope="col">
                Año
              </th>
              <th className="thead_title" scope="col">
                Transmision
              </th>
              <th className="thead_title" scope="col">
                Gasolina
              </th>
              <th className="thead_title" scope="col"></th>
              <th className="thead_title" scope="col">
                Estado
              </th>
            </tr>
          </thead>
          {/* End thead */}

          <tbody>
            {vehicles.map((carData) => {
              const defaultValues = {
                state: "Publicado",
              };

              // Mezclar valores existentes + valores por defecto
              const car = { ...defaultValues, ...carData };
              return (
                <tr key={car._id}>
                  <th className="align-middle pl20" scope="row">
                    <div className="car-listing bdr_none d-flex mb0">
                      <div className="thumb w150">
                        <Image
                          width={150}
                          height={96}
                          style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "100%",
                          }}
                          className="img-fluid"
                          src={
                            car.images[0]?.url ||
                            "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
                          }
                          alt={`${car.brand}-${car.model}-${car._id}`}
                        />
                      </div>
                      <div className="details ms-1">
                        <h6 className="title">
                          <Link href={`/vehiculo/${car._id}`}>
                            {`${car.brand} ${car.model} - ${car.year}`}
                          </Link>
                        </h6>
                        <h5 className="price">{car.price}</h5>
                      </div>
                    </div>
                  </th>
                  <td className="align-middle">{car.brand}</td>
                  <td className="align-middle">{car.year}</td>
                  <td className="align-middle">{car.transmission}</td>
                  <td className="align-middle">{car.fuelType}</td>
                  <td className="editing_list align-middle">
                    <ul
                      style={{
                        display: "flex",
                        alignItems: "center",
                        alignContent: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                      }}
                    >
                      {/* 🔹 Estado = Publicado */}
                      {car.state === "Publicado" && (
                        <>
                          <li className="list-inline-item mb-1">
                            <button
                              className="btn"
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                              onClick={() => handleView(car._id)}
                              title="Ver"
                            >
                              <span className="flaticon-view"></span>
                            </button>
                          </li>

                          <li className="list-inline-item mb-1">
                            <button
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                              onClick={() => handleEdit(car._id)}
                              title="Editar"
                            >
                              <span className="flaticon-pen"></span>
                            </button>
                          </li>

                          {/* 🔸 Botón nuevo: Marcar Vendido */}
                          <li className="list-inline-item mb-1">
                            <button
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                              onClick={() => handleMarkSold(car._id)}
                              title="Marcar como vendido"
                            >
                              <i className="flaticon-price-tag" />
                            </button>
                          </li>

                          {/* Eliminar (soft delete) */}
                          <li className="list-inline-item mb-1">
                            <button
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                              onClick={() => handleDelete(car._id)}
                              title="Remover publicación"
                            >
                              <span className="flaticon-trash"></span>
                            </button>
                          </li>
                        </>
                      )}

                      {/* 🔹 Estado = VENDIDO */}
                      {car.state === "Vendido" && (
                        <>
                          <li className="list-inline-item mb-1">
                            <button
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                              onClick={() => handleRestore(car._id)}
                              title="Publicar de nuevo"
                            >
                              <i className="flaticon-shuffle-arrows" />
                            </button>
                          </li>
                          <li className="list-inline-item mb-1">
                            <button
                              style={{
                                all: "unset",
                                cursor: "pointer",
                              }}
                              onClick={() => handleDelete(car._id)}
                              title="publicación"
                            >
                              <span className="flaticon-trash"></span>
                            </button>
                          </li>
                        </>
                      )}

                      {/* 🔹 Estado = ELIMINADO */}
                      {car.state === "Eliminado" && (
                        <li className="list-inline-item mb-1">
                          <button
                            style={{
                              all: "unset",
                              cursor: "pointer",
                            }}
                            onClick={() => handleRestore(car._id)}
                            title="Publicar de nuevo"
                          >
                            <i className="flaticon-shuffle-arrows" />
                          </button>
                        </li>
                      )}
                    </ul>
                  </td>
                  <td
                    className="align-middle"
                    style={{
                      color:
                        car.state === "Vendido"
                          ? "rgba(180, 140, 0, 0.9)"
                          : car.state === "Eliminado"
                          ? "rgba(180, 0, 0, 0.9)"
                          : "", // publicado
                    }}
                  >
                    {car.state}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListingContent;
