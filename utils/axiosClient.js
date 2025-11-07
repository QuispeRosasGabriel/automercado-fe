import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:5002/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Necesario para enviar la cookie del refresh token
});

// Rutas públicas que no requieren token
const PUBLIC_ENDPOINTS = ["/user/login", "/user/register"];

// Request Interceptor
axiosClient.interceptors.request.use(
  (config) => {
    console.log("hello interceptor", config);

    // Si es una ruta pública, no agregar token
    const isPublic = PUBLIC_ENDPOINTS.some((path) =>
      config.url?.includes(path)
    );
    if (isPublic) return config;

    // Agregar token si existe
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🟡 Response Interceptor
axiosClient.interceptors.response.use(
  async (response) => {
    // Si el backend devuelve un nuevo token en los headers, lo guardamos
    const newToken = response.headers["x-access-token"];
    if (newToken) {
      localStorage.setItem("accessToken", newToken);
      axiosClient.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newToken}`;
    }
    return response;
  },
  (response) => response,
  async (error) => {
    const isPublic = PUBLIC_ENDPOINTS.some((path) =>
      config.url?.includes(path)
    );
    originalRequest._retry = true;
    const originalRequest = error.config;
    // Evitar bucle infinito en refresh-token
    if (originalRequest.url.includes("/user/refresh-token")) {
      console.error(" Refresh token failed, logging out...");
      localStorage.clear();
      return Promise.reject(error);
    }

    // Si el token expiró (401) y aún no reintentamos
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isPublic
    ) {
      try {
        // Pedir nuevo token usando una instancia sin interceptores
        const { data } = await axios.post(
          "http://localhost:5002/api/user/refresh-token",
          {},
          { withCredentials: true }
        );

        // Guardar y actualizar el token
        localStorage.setItem("accessToken", data.accessToken);
        axiosClient.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${data.accessToken}`;

        // Reintentar la petición original
        return axiosClient(originalRequest);
      } catch (refreshError) {
        console.error("Error al refrescar token:", refreshError);
        localStorage.clear();
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default axiosClient;
