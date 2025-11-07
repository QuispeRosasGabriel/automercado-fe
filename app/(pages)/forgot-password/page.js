"use client";

import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import { useState } from "react";
import axiosClient from "@/utils/axiosClient";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!email) {
      toast.error("Por favor, introduce tu correo electrónico.");
      setLoading(false);
      return;
    }

    try {
      const { data, response } = await axiosClient.post(
        "/user/forgot-password",
        {
          email,
        }
      );

      if (!data) {
        toast.error(
          response.data.message || "Error al enviar el enlace de reinicio."
        );
        setLoading(false);
        return;
      }

      toast.success(
        "Se ha enviado un enlace para restablecer la contraseña a tu correo electrónico"
      );
    } catch (err) {
      toast.error("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />

      {/*  Main Content*/}
      <section className="ph200 mt70-992 filter-style_two">
        <div className="container">
          <form
            noValidate
            onSubmit={handleSubmit}
            style={{ maxWidth: "50%", minWidth: "250px" }}
          >
            <h2 className="breadcrumb_title">Recuperar Contraseña</h2>

            <div className="mb-4">
              <label className="form-label">Email *</label>
              <input
                type="email"
                placeholder="Email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-log btn-thm mt5"
            >
              {loading ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForgotPassword;
