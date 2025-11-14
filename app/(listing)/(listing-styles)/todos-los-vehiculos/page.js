"use client";
import Footer from "@/app/components/common/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import AdvanceFilter from "@/app/components/listing/advance-filter";
import Pagination from "@/app/components/common/Pagination";
import ListGridFilter from "@/app/components/listing/ListGridFilter";
import CarItems from "@/app/components/listing/listing-styles/listing-v3/CarItems";
import FeatureListingSlider from "@/app/components/listing/sidebar/FeatureListingSlider";
import RecentlyViewed from "@/app/components/listing/sidebar/RecentlyViewed";
import BannerWidget from "@/app/components/common/BannerWidget";
import { useGetVehicles } from "@/app/hooks";
import { useEffect, useState } from "react";
import axiosClient from "@/utils/axiosClient";

// export const metadata = {
//   title: "Listing V3 || Voiture - Automotive & Car Dealer NextJS Template",
// };

const ListingV3 = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recentVehicles, setRecentVehicles] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    totalPages: 1,
    totalCount: 0,
  });
  const [filters, setFilters] = useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    type: "",
    fuelType: "",
    minPrice: "",
    maxPrice: "",
    minKm: "",
    maxKm: "",
    page: 1,
    pageSize: 25,
    sortBy: "recent",
  });

  const getVehicles = async (params = filters) => {
    try {
      setLoading(true);
      const response = await axiosClient.get("/vehicles/filter", { params });
      setVehicles(response.data?.vehicles || []);
      setPagination(response.data?.pagination || {});
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRecentVehicles = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const { data } = await axiosClient.get(
        `/user/recent-vehicles/${user.id}`
      );
      setRecentVehicles(data?.recentVehicles || []);
    } catch (error) {
      console.error("Error fetching recent vehicles:", error);
    }
  };

  const getInstaVehicleFiltered = (filterUpdated) => {
    const updated = { ...filters, ...filterUpdated };
    setFilters(updated);
    getVehicles(updated);
  };

  // Cambiar de orden

  /* const handleSortChange = async (sortOption) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: sortOption,
      page: 1,
    }));

    const filtersUpdatedForSort = {
      ...filters,
      sortBy: sortOption,
      page: 1,
    };

    try {
      const response = await axiosClient.get("/vehicles/filter", {
        params: filtersUpdatedForSort,
      });
      setVehicles(response.data?.vehicles || []);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    } finally {
      setLoading(false);
    }
  };
 */
  useEffect(() => {
    getVehicles();
    getRecentVehicles();
  }, []);

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

      {/* Advance_search_menu_sectn*/}
      <section className="advance_search_menu_sectn bgc-thm2 pt20 pb0 mt70-992 filter-style_two">
        <div className="container">
          <AdvanceFilter
            filters={filters}
            setFilters={setFilters}
            onSearch={() => getVehicles(filters)}
          />
        </div>
      </section>
      {/* End Advance_search_menu_sectn*/}

      {/* Inner Page Breadcrumb */}
      <section className="inner_page_breadcrumb style2 inner_page_section_spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <h2 className="breadcrumb_title">Vehiculos Usados En Venta</h2>
                <p className="subtitle">Todos Los Vehiculos</p>
                <ol className="breadcrumb fn-sm mt15-sm">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Todos Los Vehiculos
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Inner Page Breadcrumb */}

      {/* Listing Grid View */}
      <section className="our-listing pt0 bgc-f9 pb30-991">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-xl-3">
              <div className="sidebar_feature_listing_widget">
                <h4 className="title">Destacados</h4>
                <div className="listing_item_1grid_slider nav_none">
                  <FeatureListingSlider />
                </div>
              </div>
              {/* End .FeatureListingSlider */}

              <div className="sidebar_recent_viewed_widgets">
                <h4 className="title">Visto Recientemente</h4>
                <RecentlyViewed recentVehicles={recentVehicles} />
              </div>
              {/* End RecentlyViewed */}

              <BannerWidget />
            </div>
            {/* End .col-lg-4 */}

            <div className="col-lg-8 col-xl-9">
              <ListGridFilter onSortChange={getInstaVehicleFiltered} />

              <div className="row">
                {loading ? (
                  <p>Cargando vehículos...</p>
                ) : vehicles.length > 0 ? (
                  <CarItems vehicles={vehicles} />
                ) : (
                  <p>No se encontraron vehículos.</p>
                )}
              </div>
              {/* End .row */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="mbp_pagination mt10">
                    <Pagination
                      currentPage={pagination.page}
                      totalPages={pagination.totalPages}
                      onPageChange={getInstaVehicleFiltered}
                    />
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* End .col-lg-8 */}
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* Listing Grid View */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
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

export default ListingV3;
