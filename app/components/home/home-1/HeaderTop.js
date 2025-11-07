"use client";

import axiosClient from "@/utils/axiosClient";
import { useEffect, useState } from "react";

const HeaderTop = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage?.getItem("user");
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleLogout = async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      if (!accessToken) throw new Error("No hay accessToken en localStorage");

      await axiosClient.post(
        "/user/logout",
        {},
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      localStorage.clear();
      sessionStorage.clear();
      window.location.href = "/";
    } catch (error) {
      toast.error("Error al cerrar sesión:", error);
      localStorage.clear();
      sessionStorage.clear();
    }
  };

  const socialData = [
    {
      icon: "fab fa-facebook-f",
      link: "#",
    },
    {
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      icon: "fab fa-linkedin",
      link: "#",
    },
  ];

  const contactData = [
    {
      icon: "flaticon-phone-call",
      text: "999 999 999",
    },
    {
      icon: "flaticon-map",
      text: "San Isidro, Lima, Peru",
    },
    // {
    //   icon: "flaticon-clock",
    //   text: "Lun - Vie 8:00 - 18:00",
    // },
  ];

  return (
    <div className="header_top dn-992">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-xl-7">
            <div className="header_top_contact_opening_widget text-center text-md-start">
              <ul className="mb0">
                {contactData.map((contact, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href="#">
                      <span className={contact.icon} />
                      {contact.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* End .col */}

          <div className="col-lg-4 col-xl-5">
            <div className="header_top_social_widgets text-center text-md-end">
              <ul className="m0">
                {socialData.map((social, index) => (
                  <li className="list-inline-item" key={index}>
                    <a href={social.link}>
                      <span className={social.icon} />
                    </a>
                  </li>
                ))}
                {!user ? (
                  <li className="list-inline-item">
                    <a
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#logInModal"
                    >
                      Inicia Sesión
                    </a>
                  </li>
                ) : (
                  <li className="list-inline-item">
                    <a href="#" onClick={handleLogout}>
                      Cerrar Sesión
                    </a>
                  </li>
                )}
                {/* <li className="list-inline-item">
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    data-bs-target="#logInModal"
                  >
                    Registro
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          {/* End .col */}
        </div>
        {/* End .row */}
      </div>
      {/* End .container */}
    </div>
  );
};

export default HeaderTop;
