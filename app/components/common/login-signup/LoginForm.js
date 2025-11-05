"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5002/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Credenciales inválidas.");
        return;
      }

      // Guardar token JWT en localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess("Inicio de sesión exitoso 🎉");

      // Redirigir o refrescar la página según tu flujo
      // window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      setError("Error al conectar con el servidor.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2 mr-sm-2">
        <label className="form-label">Email *</label>
        <input
          type="text"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group mb5 position-relative flex">
        <label className="form-label">Contrasena *</label>
        <input
          type={showPassword ? "text" : "password"}
          className="form-control"
          placeholder="Contrasena"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="exampleCheck3"
          required
        />
        <label className="custom-control-label" htmlFor="exampleCheck3">
          Recuerdame
        </label>
        <a className="btn-fpswd float-end" href="#">
          Olvidaste tu contasena?
        </a>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <button type="submit" className="btn btn-log btn-thm mt5">
        Iniciar Sesion
      </button>
    </form>
  );
};

export default LoginForm;
