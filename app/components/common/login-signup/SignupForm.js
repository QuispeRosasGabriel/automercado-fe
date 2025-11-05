"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    documentType: "",
    documentNumber: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    isReseller: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { password, confirmPassword } = formData;

    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    const body = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      password: formData.password,
      email: formData.email,
      phone: formData.phone,
      documentType: formData.documentType,
      ruc: formData.documentType === "RUC" ? formData.documentNumber : "",
      dni: formData.documentType === "DNI" ? formData.documentNumber : "",
      description: "",
      isReseller: formData.isReseller === "yes" ? true : false,
      packageType: "basic",
    };
    console.log(body);
    try {
      const res = await fetch("http://localhost:5002/api/user/create-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Cuenta creada exitosamente");
        setFormData({
          firstName: "",
          lastName: "",
          documentType: "",
          documentNumber: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          isReseller: "",
        });
      } else {
        setError(data.message || "Error al crear el usuario.");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Nombre"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="form-group">
            <label className="form-label">Apellido</label>
            <input
              type="text"
              name="lastName"
              className="form-control"
              placeholder="Apellido"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Tipo y N° documento</label>
            <div className="">
              <select
                name="documentType"
                className="form-control me-2"
                value={formData.documentType}
                onChange={handleChange}
                required
              >
                <option value="">Selecciona una opción</option>
                <option value="DNI">DNI</option>
                <option value="RUC">RUC</option>
              </select>
              <input
                type="text"
                name="documentNumber"
                className="form-control"
                placeholder="Número de documento"
                value={formData.documentNumber}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">Celular</label>
            <input
              type="text"
              name="phone"
              className="form-control"
              placeholder="Celular"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="col-lg-12">
          <div className="form-group">
            <label className="form-label">¿Eres revendedor?</label>
            <select
              className="form-control"
              name="isReseller"
              value={formData.isReseller}
              onChange={handleChange}
              required
            >
              <option value="">Selecciona una opción</option>
              <option value="yes">Sí</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        {/* === Contraseña con ícono === */}
        <div className="col-lg-6">
          <div className="form-group mb20 position-relative ">
            <label className="form-label" id="password">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="form-control"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
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
        </div>
        {/* === Confirmar Contraseña con ícono === */}
        <div className="col-lg-6">
          <div className="form-group mb20 position-relative flex">
            <label className="form-label" id="password">
              Confirmar Contraseña
            </label>
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              className="form-control"
              placeholder="Confirmar Contraseña"
              value={formData.confirmPassword}
              onChange={handleChange}
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
        </div>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button type="submit" className="btn btn-signup btn-thm mb0">
        Crear Cuenta
      </button>
    </form>
  );
};

export default SignupForm;
