"use client";
import { useState } from "react";
import ModalVideo from "react-modal-video";

const CarIntro = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="NMThdHhrLoM"
        onClose={() => setOpen(false)}
      />

      <div className="row">
        <div className="col-lg-12">
          <div className="posr">
            <div className="home1_divider_video_pop">
              <div className="video_popup_icon">
                <button
                  className="video_popup_btn popup-img popup-youtube"
                  role="button"
                  onClick={() => setOpen(true)}
                >
                  <span className="flaticon-play" />
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* End .col-lg-12 */}

        <div className="col-md-9 col-xl-5">
          <div className="home1_divider_content">
            <h2 className="title">
              Hacemos Que Encontrar Tu Auto Ideal Sea Fácil
            </h2>
            <p className="para">
              En AutoMercado, lo más importante para nosotros es que tu búsqueda
              y compra de auto sean lo más sencillas posibles. Queremos que
              encuentres el vehículo perfecto rápidamente y empieces a
              disfrutarlo sin complicaciones.
            </p>
          </div>
        </div>
        {/* End col-md-9 */}
      </div>
    </>
  );
};

export default CarIntro;
