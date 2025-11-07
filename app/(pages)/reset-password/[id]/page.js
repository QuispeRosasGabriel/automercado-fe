"use client";

import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import axiosClient from "@/utils/axiosClient";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const token = window?.location?.pathname?.split("/")?.pop() ?? "";
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newPassword || !confirmPassword) {
      toast.error("Por favor, complete todos los campos.");
      return;
    }

    if (newPassword !== confirmPassword) {
      toast.error("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      const { data, response } = await axiosClient.post(
        `/user/reset-password/${token}`,
        {
          newPassword,
        }
      );

      if (!data) {
        toast.error(
          response.data.message || "Error al enviar el enlace de reinicio."
        );
        setLoading(false);
        return;
      }

      toast.success("La contraseña se ha restablecido correctamente.");
      setNewPassword("");
      setConfirmPassword("");
      setTimeout(() => router.push(`/?isComingFromRecoverPassword=true`), 1500);
    } catch (err) {
      toast.error("Error al conectar con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrapper">
      {/* Header */}
      <HeaderTop />
      <DefaultHeader />
      <MobileMenu />

      {/* Main Content */}
      <section className="ph200 mt70-992 filter-style_two">
        <div className="container">
          <form
            onSubmit={handleSubmit}
            style={{ maxWidth: "50%", minWidth: "250px" }}
            noValidate
          >
            <h2 className="breadcrumb_title">Reiniciar Contraseña</h2>

            {/* Nueva contraseña */}
            <div className="form-group mb5 position-relative flex">
              <label className="form-label">Nueva contraseña *</label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                placeholder="Contraseña"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "43px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
            </div>

            {/* Confirmar contraseña */}
            <div className="form-group mb20 position-relative flex">
              <label className="form-label" id="password">
                Confirmar nueva contraseña
              </label>
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                className="form-control"
                placeholder="Confirmar Contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <span
                onClick={() => setShowConfirm(!showConfirm)}
                className="position-absolute"
                style={{
                  right: "10px",
                  top: "43px",
                  cursor: "pointer",
                  color: "#666",
                }}
              >
                {showConfirm ? <Eye size={18} /> : <EyeOff size={18} />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn btn-log btn-thm mt5"
            >
              {loading ? "Reiniciando..." : "Reiniciar Contraseña"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ResetPassword;
