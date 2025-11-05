"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DashboardSidebarMenu = () => {
    const path = usePathname();

    const menuItems = [
        {
            icon: "flaticon-dashboard",
            label: "Dashboard",
            path: "/dashboard",
        },
        {
            icon: "flaticon-user-2",
            label: "Perfil",
            path: "/mi-perfil",
        },
        {
            icon: "flaticon-list",
            label: "Mis Vehiculos",
            path: "/mis-vehiculos",
        },
        {
            icon: "flaticon-heart",
            label: "Favoritos",
            path: "/mis-favoritos",
        },
        {
            icon: "flaticon-plus",
            label: "Agregar Nuevo Vehiculo",
            path: "/planes",
        },
        // {
        //     icon: "flaticon-message",
        //     label: "Messages",
        //     path: "/messages",
        // },
        {
            icon: "flaticon-logout",
            label: "Cerrar Sesion",
            path: "/login",
        },
    ];

    return (
        <>
            {menuItems.map((item, index) => (
                <li key={index}>
                    <Link
                        className={item.path === path ? "active" : ""}
                        href={item.path}
                    >
                        <span className={item.icon} />
                        {item.label}
                    </Link>
                </li>
            ))}
        </>
    );
};

export default DashboardSidebarMenu;
