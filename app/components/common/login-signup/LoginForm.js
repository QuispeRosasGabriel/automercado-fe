"use client";

import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import axiosClient from "@/utils/axiosClient";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email?.trim() || !password?.trim()) {
      toast.warning("Por favor, completa todos los campos.");
      return;
    }

    try {
      const { data } = await axiosClient.post("/user/login", {
        email,
        password,
      });

      if (!data?.accessToken) {
        toast.error(data.message || "Credenciales inválidas.");
        return;
      }

      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Inicio de sesión exitoso.", {
        autoClose: 1500,
      });

      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (err) {
      toast.error("Credenciales incorrectas.");
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
        />
        <label className="custom-control-label" htmlFor="exampleCheck3">
          Recuerdame
        </label>
        <a className="btn-fpswd float-end" href="/forgot-password">
          Olvidaste tu contaseña?
        </a>
      </div>

      <button type="submit" className="btn btn-log btn-thm mt5">
        Iniciar Sesion
      </button>
    </form>
  );
};

export default LoginForm;
