"use client";

import Image from "next/image";
import HeroFilter from "../../common/HeroFilter";
import React, { useState } from "react";
import axiosClient from "@/utils/axiosClient";
import { toast } from "react-toastify";

const Hero = () => {
 /*  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGetUser = async () => {
    try {
      setLoading(true);

      // Obtener el usuario guardado en localStorage
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        toast.error("No hay usuario autenticado.");
        return;
      }

      const parsedUser = JSON.parse(storedUser);
      const userId = parsedUser.id;

      if (!userId) {
        toast.error("No se encontró el ID del usuario.");
        return;
      }

      // Hacer la petición a tu backend
      const { data } = await axiosClient.get(`/user/get-user-by-id`, {
        params: { id: userId },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });

      setUserData(data);
    } catch (err) {
      toast.error(err.response?.data?.message || "Error al obtener el usuario");
    } finally {
      setLoading(false);
    }
  }; */

  return (
    <section className="home-one bg-home1">
      <div className="container">
        <div className="row posr">
          <div className="col-lg-10 m-auto">
            <div className="home_content home1_style">
              <div className="home-text text-center mb30">
                {/* <div className="test waaaaaaa">
                  <div className="p-4 flex flex-col items-center space-y-4">
                    <button
                      onClick={handleGetUser}
                      disabled={loading}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition disabled:opacity-60"
                    >
                      {loading ? "Cargando..." : "Obtener usuario por ID"}
                    </button>

                    {userData && (
                      <div className="bg-gray-100 p-4 rounded-lg shadow w-full max-w-md text-left">
                        <h3 className="font-semibold mb-2">
                          Datos del usuario:
                        </h3>
                        <pre className="text-sm">
                          {JSON.stringify(userData, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                </div> */}

                <h2 className="title">
                  <span className="aminated-object1">
                    <Image
                      width={110}
                      height={14}
                      style={{
                        objectFit: "contain",
                      }}
                      priority
                      className="objects"
                      src="/images/home/title-bottom-border.svg"
                      alt="img"
                    />
                  </span>
                  Encuentra tu siguiente vehiculo
                </h2>
                <p className="para">Nuevos y seminuevos para todos.</p>
              </div>
              <div className="advance_search_panel">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
