"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const testimonials = [
  {
    "id": 1,
    "name": "Roberto Córdova",
    "title": "Coordinador de Marketing",
    "text": "Encontrar el auto perfecto nunca fue tan fácil. La atención al cliente fue increíble y el proceso de compra, totalmente transparente. ¡Definitivamente volveré!"
  },
  {
    "id": 2,
    "name": "Orlando Chamorro",
    "title": "Presidente de Ventas",
    "text": "La experiencia fue excelente de principio a fin. Me ayudaron a encontrar exactamente lo que necesitaba sin complicaciones. ¡Altamente recomendado!"
  },
  {
    "id": 3,
    "name": "Marcos Preciado",
    "title": "Trader",
    "text": "Servicio excepcional y una gran variedad de autos. Me asesoraron en todo momento y hoy disfruto de mi nuevo vehículo sin preocupaciones."
  },
  {
    "id": 4,
    "name": "Fernando Chavarry",
    "title": "Empresario",
    "text": "Desde la primera consulta hasta la entrega del auto, todo fue impecable. Se nota que realmente se preocupan por sus clientes. ¡Muy satisfecho con mi compra!"
  }
]


const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        speed={1000}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial_box">
              <div className="thumb">
                <Image
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={`/images/testimonial/${testimonial.id}.png`}
                  alt={`${testimonial.id}.png`}
                />
                <h4 className="title">
                  {testimonial.name} <br />
                  <small>{testimonial.title}</small>
                </h4>
              </div>
              <div className="details">
                <div className="icon">
                  <span className="fa fa-quote-left" />
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>
    </>
  );
};

export default Testimonial;
