"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import BreadCrumb from "@/app/components/listing/listing-single/BreadCrumb";
import ShareMeta from "../../../../components/listing/listing-single/ShareMeta";
import ProductGallery from "@/app/components/listing/listing-single/listing-single-v1/ProductGallery";
import Overview from "@/app/components/listing/listing-single/Overview";
import Descriptions from "@/app/components/listing/listing-single/Descriptions";
import Features from "@/app/components/listing/listing-single/Features";
import Map from "@/app/components/common/Map";
import ConsumerReviews from "@/app/components/listing/listing-single/ConsumerReviews";
import ReviewBox from "@/app/components/listing/listing-single/ReviewBox";
import ContactSeller from "@/app/components/listing/listing-single/sidebar/ContactSeller";
import SellerDetail from "@/app/components/listing/listing-single/sidebar/SellerDetail";
import Link from "next/link";
import ReleatedCar from "@/app/components/listing/listing-single/ReleatedCar";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axiosClient from "@/utils/axiosClient";

/* export const metadata = {
  title:
    "Listing Single V1 || Voiture - Automotive & Car Dealer NextJS Template",
}; */

const ListingSingleV1 = () => {
  const { vehicleId } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);

  const addRecentVehicle = async (vehicleId, userId) => {
    try {
      await axiosClient.post("/user/add-recent-vehicle", {
        userId,
        vehicleId,
      });
    } catch (error) {
      console.error("Error al agregar vehículo a recientes:", error);
    }
  };

  const getVehicleById = async () => {
    try {
      const response = await axiosClient.get(
        `/vehicles/get-vehicle-by-id/${vehicleId}`
      );
      setVehicle(response.data.vehicle);
    } catch (error) {
      console.error("Error obteniendo vehículo:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (vehicleId) {
      getVehicleById();
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        addRecentVehicle(vehicleId, user.id);
      }
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" />
      </div>
    );
  }

  if (!vehicle) {
    return <div className="text-center py-5">Vehículo no encontrado</div>;
  }

  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}

          <div className="row mb30">
            <div className="col-lg-7 col-xl-8">
              <div className="single_page_heading_content">
                <div className="car_single_content_wrapper">
                  <ul className="car_info mb20-md">
                    <li className="list-inline-item">
                      {/* status del vehículo */}
                      <a href="#">{vehicle.status}</a>
                    </li>
                    <li className="list-inline-item">
                      {/* fecha de publicación */}
                      <a href="#">
                        <span className="flaticon-clock-1 vam" />
                        {/* podrías formatear createdAt aquí */}
                        Publicado:{" "}
                        {new Date(vehicle.createdAt).toLocaleDateString()}
                      </a>
                    </li>
                    <li className="list-inline-item">
                      {/* cantidad de vistas si la agregas luego */}
                      <a href="#">
                        <span className="flaticon-eye vam" />
                        13102
                      </a>
                    </li>
                  </ul>
                  {/* Marca y modelo */}
                  <h2 className="title">
                    {vehicle.brand} {vehicle.model}
                  </h2>

                  {/* tipo de vehículo */}
                  <p className="para">
                    {vehicle.type} | {vehicle.year} | {vehicle.fuelType}
                  </p>
                </div>
              </div>
            </div>
            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-4">
              <div className="single_page_heading_content text-start text-lg-end">
                <div className="share_content">
                  <ShareMeta />
                </div>
                <div className="price_content">
                  <div className="price mt60 mb10 mt10-md">
                    <h3>
                      {/* precio del vehículo */}
                      <small className="mr15">
                        {/* si más adelante quieres mostrar precio anterior, lo puedes poner aquí */}
                        <del>$92,480</del>
                      </small>
                      ${vehicle.price.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <ProductGallery images={vehicle.images} />
              {/* End Car Gallery */}

              <div className="opening_hour_widgets p30 mt30">
                <div className="wrapper">
                  <h4 className="title">Informacion Del Vehiculo</h4>
                  <Overview vehicle={vehicle} />
                </div>
              </div>
              {/* End opening_hour_widgets */}

              <div className="listing_single_description mt30">
                <h4 className="mb30">
                  Descripcion{" "}
                  <span className="float-end body-color fz13">ID #9535</span>
                </h4>
                {/* descripción del vehículo */}
                {/*  <Descriptions /> */}
                <p className="first-para">{vehicle.description}</p>
                {/* <Descriptions /> */}
              </div>
              {/* End car descriptions */}

              <div className="user_profile_service">
                {/* FALTA DATA PARA ESTO */}
                <Features />
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <a className="fz12 tdu color-blue" href="#">
                      Ver todas las características
                    </a>
                  </div>
                </div>
              </div>
              {/* End user profile service */}

              <div className="user_profile_location">
                <h4 className="title">Location</h4>
                <div className="property_sp_map mb40">
                  <div className="h400 bdrs8 map_in" id="map-canvas">
                    <Map />
                  </div>
                </div>
                <div className="upl_content d-block d-md-flex">
                  <p className="float-start fn-sm mb20-sm">
                    <span className="fas fa-map-marker-alt pr10 vam" />
                    3891 Ranchview Dr. Richardson, California 62639
                  </p>
                  <button className="btn location_btn">Get Direction</button>
                </div>
              </div>
              {/* End Location */}

              <ConsumerReviews />
              {/* End ConsumerReviews */}

              <ReviewBox />
              {/* End ReviewBox */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-lg-4 col-xl-4">
              <div className="offer_btns">
                <div className="text-end">
                  {/* <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20">
                    <span className="flaticon-coin mr10 fz18 vam" />
                    Make an Offer Price
                  </button> */}
                  {/* <button className="btn ofr_btn2 btn-block mt0 mb20">
                    <span className="flaticon-profit-report mr10 fz18 vam" />
                    View VIN Report
                  </button> */}
                </div>
              </div>
              {/* End offer_btn
               */}
              <div className="sidebar_seller_contact">
                <SellerDetail seller={vehicle.seller} />
                <h4 className="mb30">Contactar Al Vendedor</h4>
                <ContactSeller />
              </div>

              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {/* Car For Rent */}
      <section className="car-for-rent bb1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Vehiculos Similares</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/todos-los-vehiculos" className="more_listing">
                  Mostrar Todos
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car For Rent */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default ListingSingleV1;
